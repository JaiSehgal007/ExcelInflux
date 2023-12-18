import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import uploadImage from '../assets/images/cloud-computing.png'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:80/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully', response.data);
      toast.success('Your file has been uploaded. Records will be processed successfully.');
      setUploaded(true);
    } catch (error) {
      console.error('Error uploading file', error);
      toast.error('Error processing file');
    }
  };

  return (
    <div style={{ width: '100%', display: 'flex' ,flexDirection:'column', justifyContent: 'center',alignItems:'center' }}>
      <h2>Add candidates to database</h2>
      <div style={{ width: '95%', margin: '20px', borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',borderColor:'black' }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          {!uploaded ? (
            <div style={{ margin: '20px auto', width: '100%', position: 'relative' }}>
              <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                <img src={uploadImage} alt="Upload" style={{ width: '200px', height: '200px' }} />
                {selectedFile && <p>{selectedFile.name}</p>}
                {!selectedFile && <p>Upload a .xlsx or .xls file</p>}
              </label>
              <input id="file-upload" type="file" onChange={onChangeHandler} style={{ display: 'none' }} />
              <Form onSubmit={onSubmitHandler}>
                {selectedFile && <Button type="submit" style={{ backgroundColor: 'green', borderRadius: '10px', padding: '10px 20px', color: 'white', fontWeight: 'bold', border: 'none' }}>Upload</Button>}
              </Form>
            </div>
          ) : (
            <div>
              <p style={{ color: 'green',fontWeight:'bold',fontSize:'large' }}>Thank you</p>
              <p>✅Your file has been uploaded.</p>
              <p>Records will be processed successfully.</p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FileUpload;
