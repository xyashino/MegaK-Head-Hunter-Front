import React, { ReactNode, useState } from "react";
import Dropzone from "react-dropzone";
import classes from "./DragAndDrop.module.css";
import { AxiosProgressEvent } from "axios";
import { AxiosSetup } from "@utils/network/AxiosSetup";
import { RequestPath } from "@enums/request-path.enum";
import { toast } from "react-hot-toast";

const fileUploadedMsg = <p className={classes.green}>Plik wysłany</p>;
const fileUploadError = (
  <p className={classes.red}>
    Wystąpił problem z wysłaniem pliku, spróbuj ponownie
  </p>
);

const uploadOnServer = (
  file: File,
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
): Promise<any> => {
  const formData = new FormData();

  formData.append("uploadStudents", file);

  return AxiosSetup.post(RequestPath.Upload, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

type Props = {
  text: string;
};

export const DragAndDrop = ({ text }: Props) => {
  const [selectedFiles, setSelectedFiles] = useState<File[] | undefined>(
    undefined
  );
  const [message, setMessage] = useState<ReactNode | string>("");

  const onDrop = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFiles(files);
    }
  };

  const upload = () => {
    if (selectedFiles && selectedFiles.length > 0) {
      const currentFile = selectedFiles[0];
      uploadOnServer(currentFile)
        .then(() => {
          setMessage(fileUploadedMsg);
          toast["success"](fileUploadedMsg);
        })
        .catch(() => {
          setMessage(fileUploadError);
          toast["error"](fileUploadedMsg);
        });

      setSelectedFiles(undefined);
    }
  };

  return (
    <div className={classes.box}>
      <Dropzone onDrop={onDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div className={classes.drop_box} {...getRootProps()}>
              <input {...getInputProps()} />
              {selectedFiles && selectedFiles[0] && selectedFiles[0].name ? (
                <div>{selectedFiles[0].name}</div>
              ) : (
                "Przeciągnij i upuść plik lub kliknij i wybierz z dysku"
              )}
            </div>
            <aside>
              <button
                className={classes.upload_btn}
                disabled={!selectedFiles}
                onClick={upload}
              >
                Prześlij
              </button>
            </aside>
          </section>
        )}
      </Dropzone>
      <div>{message}</div>
    </div>
  );
};
