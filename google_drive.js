import React from 'react';
import React from 'react';

class GoogleDrive extends React.Component 
  {
    apiKey     = '';
    endPoint   = ''; 
    apiVersion = '';
    rootFolderID = '';

    constructor(props) 
     { 
        super(props);
        this.apiKey     = 'AIzaSyATLOuKcVOYaW3bsVr6k0J1TjvY335VQFU';
        this.apiVersion = 'v3/';
        this.endPoint   = 'https://www.googleapis.com/drive/'+this.apiVersion;
        this.rootFolderID = '1d_1wKXCtBP6G_TsoUQ2lVqwY6wPbNytD';
     }


    _listFilesInFolder(folderId)
    {
      //return fetch(this.endPoint+'files?q=%27'+folderId+'%27%20in%20parents%20and%20fullText%20contains%20%27XAU_EUR%27&key='+this.apiKey, {
        return fetch(this.endPoint+'files?q=%27'+folderId+'%27%20in%20parents&key='+this.apiKey, {
        method: 'GET',        
        headers:  
        {
          'Content-Type': 'application/json'
        }, 
        }) 
        .then(response => { return response.json();})
        .then((responseData) => 
        {
          return responseData.files;
        })
        .catch(err => { 
            return err;
        });
    }

    _listChildrenFolders(rootFolderID)
    {
      if(rootFolderID!=null)
          this.rootFolderID;

      return fetch(this.endPoint+'files?q=%27'+this.rootFolderID+'%27%20in%20parents%20and%20mimeType%20%3D%20%27application%2Fvnd.google-apps.folder%27&key='+this.apiKey, {
        method: 'GET',        
        headers:  
        {
          'Content-Type': 'application/json'
        }, 
        }) 
        .then(response => { return response.json();})
        .then((responseData) => 
        {
          return responseData.files;
        })
        .catch(err => { 
            return err;
        });
    }
    _getFile(fileId)
    {
      return fetch(this.endPoint+'files/'+fileId+'&key='+this.apiKey, 
        {
          method: 'GET',        
          headers:  
          {
            'Content-Type': 'application/json'
          }, 
        }) 
        .then(response => { return response.json();})
        .then((responseData) => 
        {
          return responseData.files;
        })
        .catch(err => { 
            return err;
        });
    }
  } 
  GoogleDrive = new GoogleDrive();
  export {GoogleDrive};    