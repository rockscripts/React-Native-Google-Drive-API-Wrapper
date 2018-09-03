/*
 Copyright 2018, Rockscripts / J.Alexander Grisales Rivera, All rights reserved. 

*/
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

    //BEGIN CHANGES METHODS
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
    //ENDOF CHANGES METHODS

    //BEGIN CHANNELS METHODS
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
    //ENDOF CHANNELS METHODS


    //BEGIN FILE METHODS
    _files_list(params)
    {
        return fetch(this.endPoint+'files?key='+this.apiKey+this._urlParamsBuilder(params), 
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

    _files_get(fileId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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

    _files_update(fileId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
        {
          method: 'PATCH',        
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

    _files_watch(fileId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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

    _files_generateIds(params)
    {
        return fetch(this.endPoint+'files/generateIds?key='+this.apiKey+this._urlParamsBuilder(params), 
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

    _files_emptyTrash()
    {
        return fetch(this.endPoint+'files/'+fileId+'/trash?key='+this.apiKey, 
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

    _files_delete(fileId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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

    _files_create(params)
    {
        return fetch(this.endPoint+'files?key='+this.apiKey+this._urlParamsBuilder(params), 
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

    _files_copy(fileId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'/copy?key='+this.apiKey+this._urlParamsBuilder(params), 
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

    _files_listFilesInFolder(folderId)
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

    _files_listChildrenFolders(rootFolderID)
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
    //ENDOF FILE METHODS

    //BEGIN PERMISSIONS METHODS
    _permissions_create(fileId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'/permissions?key='+this.apiKey+this._urlParamsBuilder(params), 
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
    
    _permissions_update(fileId, permissionId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'/permissions/'+permissionId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
        {
          method: 'PATCH',        
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

    _files_delete(fileId, permissionId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'/permissions/'+permissionId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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

    _files_get(fileId, permissionId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'/permissions/'+permissionId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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

    _files_list(fileId, params)
    {
        return fetch(this.endPoint+'files/'+fileId+'/permissions?key='+this.apiKey+this._urlParamsBuilder(params), 
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
    //ENDOF PERMISSIONS METHODS


     //BEGIN REPLIES METHODS
     _replies_create(fileId, commentId, params)
     {
         return fetch(this.endPoint+'files/'+fileId+'/comments/'+commentId+'/replies?key='+this.apiKey+this._urlParamsBuilder(params), 
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
     
     _replies_update(fileId, commentId, replyId, params)
     {
         return fetch(this.endPoint+'files/'+fileId+'/comments/'+commentId+'/replies/?key='+this.apiKey+this._urlParamsBuilder(params), 
         {
           method: 'PATCH',        
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
 
     _replies_delete(fileId, commentId, replyId, params)
     {
         return fetch(this.endPoint+'files/'+fileId+'/comments/'+commentId+'/replies/'+replyId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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
 
     _replies_get(fileId, commentId, replyId, params)
     {
         return fetch(this.endPoint+'files/'+fileId+'/comments/'+commentId+'/replies/'+replyId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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
 
     _replies_list(fileId, commentId, params)
     {
         return fetch(this.endPoint+'files/'+fileId+'/comments/'+commentId+'/replies?key='+this.apiKey+this._urlParamsBuilder(params), 
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
     //ENDOF REPLIES METHODS
    
       //BEGIN REVISIONS METHODS
       _revisions_update(fileId, revisionId, params)
       {
           return fetch(this.endPoint+'files/'+fileId+'/revisions/'+revisionId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
           {
             method: 'PATCH',        
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
   
       _revisions_delete(fileId, revisionId, params)
       {
           return fetch(this.endPoint+'files/'+fileId+'/revisions/'+revisionId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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
   
       _revisions_get(fileId, revisionId, params)
       {
           return fetch(this.endPoint+'files/'+fileId+'/revisions/'+revisionId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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
   
       _revisions_list(fileId, params)
       {
           return fetch(this.endPoint+'files/'+fileId+'/revisions?key='+this.apiKey+this._urlParamsBuilder(params), 
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
       //ENDOF REVISIONS METHODS

        //BEGIN TEAMDRIVES METHODS
     _teamdrives_create(params)
     {
         return fetch(this.endPoint+'teamdrives?key='+this.apiKey+this._urlParamsBuilder(params), 
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
     
     _teamdrives_update(teamDriveId, params)
     {
         return fetch(this.endPoint+'teamdrives/'+teamDriveId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
         {
           method: 'PATCH',        
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
 
     _teamdrives_delete(teamDriveId, params)
     {
         return fetch(this.endPoint+'teamdrives/'+teamDriveId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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
 
     _teamdrives_get(teamDriveId, params)
     {
         return fetch(this.endPoint+'teamdrives/'+teamDriveId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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
 
     _teamdrives_list(teamDriveId, params)
     {
         return fetch(this.endPoint+'teamdrives/'+teamDriveId+'?key='+this.apiKey+this._urlParamsBuilder(params), 
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
     //ENDOF TEAMDRIVES METHODS
  } 

  GoogleDrive = new GoogleDrive();
  export {GoogleDrive};