import React from 'react';
import './styles.scss';

const Upload = ({ filesAccept = ['.doc', '.docx', '.pdf'], lable = '', className = '' }) => {
  return (
    <div className={`${className}  upload`}>
      <div className="card">
        <h3>{lable}</h3>
        <div className="drop_box relative">
          <header>
            <h4>เลือกไฟล์ที่นี่</h4>
          </header>
          <p>รองรับไฟล์ {filesAccept.join(' ').toLocaleUpperCase()}</p>
          <input
            type="file"
            accept={filesAccept.join(',')}
            className="opacity-0 absolute left-0 top-0 w-full h-full z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Upload;
