import React from 'react';

class GoogleDrive extends React.Component 
  {
    apiKey       = '';
    endPoint     = ''; 
    apiVersion   = '';
    rootFolderID = '';

    constructor(props) 
     { 
        super(props);
        this.apiKey     = 'AIzaSyATLOuKcVOYaW3bsVr6k0J1TjvY335VQFU';
        this.apiVersion = 'v3/';
        this.endPoint   = 'https://www.googleapis.com/drive/'+this.apiVersion;
        this.rootFolderID = '1d_1wKXCtBP6G_TsoUQ2lVqwY6wPbNytD';
     }

    _setAccessToken(key)
    {
      this.apiKey = key;
    }

    _getAccessToken()
    {
      return this.apiKey;
    }

    _urlParamsBuilder(params)
    {
      queryString = '';
      for(i=0;i<params.length;i++)
      {
        param = params[i];
        queryString += '&'+param.name+'='+param.value;
      }
      return queryString;
    }

    _about(params)
    {
        return fetch(this.endPoint+'about?key='+this.apiKey+this._urlParamsBuilder(params), 
        {
          method: 'GET',        
          headers:  
          {
            'Authorization': "Bearer " + this.apiKey,
            'Content-Type': 'application/json'
          },
        }) 
        .then(response => { return response.json();})
        .then((responseData) => 
        {
          return responseData;
        })
        .catch(err => { 
            return err;
        });
    }

    _changes_getStartPageToken(params)
    {
        return fetch(this.endPoint+'changes/startPageToken?key='+this.apiKey+this._urlParamsBuilder(params), 
        {
          method: 'GET',        
          headers:  
          {
            'Authorization': "Bearer " + this.apiKey,
            'Content-Type': 'application/json'
          },
        }) 
        .then(response => { return response.json(); })
        .then((responseData) => 
        {
          return responseData;
        })
        .catch(err => { 
            return err;
        });
    }

    _changes_list(params)
    {
        return fetch(this.endPoint+'changes?key='+this.apiKey+this._urlParamsBuilder(params), 
        {
          method: 'GET',        
          headers:  
          {
            'Authorization': "Bearer " + this.apiKey,
            'Content-Type': 'application/json'
          },
        }) 
        .then(response => { return response.json(); })
        .then((responseData) => 
        {
          return responseData;
        })
        .catch(err => { 
            return err;
        });
    }
    
    _changes_watch(params)
    {
        return fetch(this.endPoint+'changes/watch?key='+this.apiKey+this._urlParamsBuilder(params), 
        {
          method: 'POST',        
          headers:  
          {
            'Authorization': "Bearer " + this.apiKey,
            'Content-Type': 'application/json'
          }
        }) 
        .then(response => { return response.json(); })
        .then((responseData) => 
        {
          return responseData;
        })
        .catch(err => { 
            return err;
        });
    }


    _channels_create(fileId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'/comments?key='+this.apiKey+this._urlParamsBuilder(params), 
        {
          method: 'POST',        
          headers:  
          {
            'Authorization': "Bearer " + this.apiKey,
            'Content-Type': 'application/json'
          }
        }) 
        .then(response => { return response.json(); })
        .then((responseData) => 
        {
          return responseData;
        })
        .catch(err => { 
            return err;
        });
    }

    _channels_delete(fileId, commentId)
    {
        return fetch(this.endPoint+'files/'+fileId+'/comments/'+commentId+'?key='+this.apiKey, 
        {
          method: 'DELETE',        
          headers:  
          {
            'Authorization': "Bearer " + this.apiKey,
            'Content-Type': 'application/json'
          }
        }) 
        .then(response => { return response.json(); })
        .then((responseData) => 
        {
          return responseData;
        })
        .catch(err => { 
            return err;
        });
    }

    _channels_get(fileId, commentId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'/comments/'+commentId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
        {
          method: 'GET',        
          headers:  
          {
            'Authorization': "Bearer " + this.apiKey,
            'Content-Type': 'application/json'
          }
        }) 
        .then(response => { return response.json(); })
        .then((responseData) => 
        {
          return responseData;
        })
        .catch(err => { 
            return err;
        });
    }

    _channels_list(fileId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'/comments/?key='+this.apiKey+this._urlParamsBuilder(params), 
        {
          method: 'GET',        
          headers:  
          {
            'Authorization': "Bearer " + this.apiKey,
            'Content-Type': 'application/json'
          }
        }) 
        .then(response => { return response.json(); })
        .then((responseData) => 
        {
          return responseData;
        })
        .catch(err => { 
            return err;
        });
    }

    _channels_update(fileId, commentId, content)
    {
        return fetch(this.endPoint+'files/'+fileId+'/comments/'+commentId+'?key='+this.apiKey, 
        {
          method: 'PATCH',        
          headers:  
          {
            'Authorization': "Bearer " + this.apiKey,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            content: content
          })
        }) 
        .then(response => { return response.json(); })
        .then((responseData) => 
        {
          return responseData;
        })
        .catch(err => { 
            return err;
        });
    }

    _listFilesInFolder(folderId)
    {
      //return fetch(this.endPoint+'files?q=%27'+folderId+'%27%20in%20parents%20and%20fullText%20contains%20%27XAU_EUR%27&key='+this.apiKey, {
        return fetch(this.endPoint+'files?q=%27'+folderId+'%27%20in%20parents&key='+this.apiKey, {
        method: 'GET',        
        headers:  
        {
          'Authorization': "Bearer " + this.apiKey,
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
          this.rootFolderID = rootFolderID;

      return fetch(this.endPoint+'files?q=%27'+this.rootFolderID+'%27%20in%20parents%20and%20mimeType%20%3D%20%27application%2Fvnd.google-apps.folder%27&key='+this.apiKey, {
        method: 'GET',        
        headers:  
        {
          'Authorization': "Bearer " + this.apiKey,
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
            'Authorization': "Bearer " + this.apiKey,
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