import React, { ReactNode, useState } from "react";
import { AxiosProgressEvent } from "axios";
import Dropzone from "react-dropzone";
import { AxiosSetup } from "@utils/network/AxiosSetup";
import { RequestPath } from "@enums/request-path.enum";
import { toast } from "react-hot-toast";
import { Button } from "@componentsCommon/Button/Button";
import classes from "./DragAndDropPage.module.css";

const fileUploadedMsg = <p className={`${classes.green} ${classes.info}`}>Plik wysłany</p>;
const fileUploadError = (
  <p className={`${classes.red} ${classes.info}`}>
    Wystąpił problem z wysłaniem pliku, spróbuj ponownie
  </p>
);

const uploadOnServer = (
  file: File,
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
): Promise<unknown> => {
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
  secondText?:string
};

export const DragAndDropPage = ({ text ,secondText=''}: Props) => {
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
          toast.success(fileUploadedMsg);
        })
        .catch(() => {
          setMessage(fileUploadError);
          toast.error(fileUploadError);
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
                <p className={classes.text}>{text} <br/> {secondText}</p>
              )}
            </div>
            <aside className={classes.aside}>
              <Button
                status={!selectedFiles ? 'disabled' : 'active'}
                onClick={upload}
              >
                Prześlij
              </Button>
            </aside>
          </section>
        )}
      </Dropzone>
      <div>{message}</div>
    </div>
  );
};
