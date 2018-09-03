<h1>Google Drive API Wrapper for React Native Applications</h1>
<p>
Communicates with Google drive through this package. 
</p>
<h1>Donate a teacup</h1>
<p>
  <b>BITCOIN:</b>
  <pre>17nunWK3iF6vMav7aZV1s9jJTgNSBQiakr</pre>

  <b>ETHER:</b>
  <pre>0x1DF4dc4Da9563Eaa388E17FC441068dBd1587587</pre>
  
  <b>BITCOIN CASH:</b>
  <pre>qp98lzgt8dcuhfvxdv25wlr6eu6zapaajy6h38vg3g</pre>

</p>
<h1>Import and call methods</h1>
<h4>Import in your react native application.</h4>
<pre>
import {GoogleDrive} from 'react-native-google-drive-api';
</pre>

<br><br>
<p>The follow methods are available:</p>
<h4>Set Access Token</h4>
<pre>
GoogleDrive._setAccessToken(myAccessToken);
</pre> 
<br>

<h4>Get Access Token</h4>
<pre>
GoogleDrive._getAccessToken();
</pre> 
<br>

<h4>About</h4>
<pre>
GoogleDrive._about([{name:'fields',value:'user,storageQuota'}]).then((responseAbout)=>
      { 
          console.log(responseAbout)                 
      }); 
</pre> 
<br>
<h4>Changes</h4>
<p>getStartPageToken</p>
<pre>
GoogleDrive._changes_getStartPageToken([]).then((responseStartPageToken)=>
      { 
          if(this.state.loaded==false)
          {
            this.setState({responseStartPageToken:responseStartPageToken,loaded:true})
          }                  
      }); 
</pre>
<p>list</p>
<pre>
GoogleDrive._changes_list([{'name':'pageToken','value':pageToken}]).then((responseList)=>
      { 
          if(this.state.loaded==false)
          {
            this.setState({responseList:responseList,loaded:true})
          }                  
      }); 
</pre>
<p>watch</p>
<pre>
GoogleDrive._changes_watch([{'name':'pageToken','value':pageToken}]).then((responseWatch)=>
      { 
          if(this.state.loaded==false)
          {
            this.setState({responseWatch:responseWatch,loaded:true})
          }                  
      }); 
</pre>
<br>
<h4>Channels</h4>
<pre>

</pre>
<br>
<h4>Comments</h4>
<pre>

</pre>
<br>
<h4>Files</h4>
<pre>

</pre>
<br>
<h4>Permissions</h4>
<pre>

</pre>
<br>
<h4>Replies</h4>
<pre>

</pre>
<br>
<h4>Revisions</h4>
<pre>

</pre>
<br>
<h4>Teamdrives</h4>
<pre>

</pre>



