import React, { ReactNode, useState} from 'react';
import axios from "axios";
import Dropzone from 'react-dropzone';
import classes from "./DragAndDrop.module.css"
import { AxiosProgressEvent } from 'axios';

  const fileUploadedMsg = <p className={classes.green}>Plik wysłany</p>
  const fileUploadError = <p className={classes.red}>Wystąpił problem z wysłaniem pliku, spróbuj ponownie</p>

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});


const uploadOnServer = (file: File, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): Promise<any> => {
  let formData = new FormData();

  formData.append("uploadStudents", file);

  return http.post("/upload/file", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export const DragAndDrop = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[] | undefined>(undefined);
  const [currentFile, setCurrentFile] = useState<File | undefined>(undefined);
  const [message, setMessage] = useState<ReactNode | string>("");

  const onDrop = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFiles(files);
    }
  };


  const upload = () => {
    if (selectedFiles && selectedFiles.length > 0){
    let currentFile = selectedFiles[0];

    setCurrentFile(currentFile);

            uploadOnServer(currentFile)
              .then(() => {
                setMessage(fileUploadedMsg);
              })
              .catch(() => {
              setMessage(fileUploadError);
              setCurrentFile(undefined);
              });

    setSelectedFiles(undefined);
  }};


  return (
    <div className={classes.box}>
      <Dropzone onDrop={onDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div  className={classes.drop_box} {...getRootProps()}>
              <input {...getInputProps()} />
              {selectedFiles && selectedFiles[0] && selectedFiles[0].name ? (
                <div>
                  {selectedFiles[0].name}
                </div>
              ) : (
                "Przeciągnij i upuść plik tutaj lub kliknij, aby wybrać plik"
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
      <div>
        {message}
      </div>
    </div>
  );
  }