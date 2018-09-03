<h1>Google Drive API Wrapper for React Native Applications</h1>
<p>
Communicates with Google drive through this package. 
</p>
<h2 style='color:blue'>Give a donation and i will send full development manual, test application runing with this API Wrapper and remote support.</h2>
<div>
 <table>
   <tr>
     <td>
       <img src='images/1.png' width='250'>
     </td>
     <td>
       <img src='images/2.png' width='250'>
     </td>
   </tr>
   <tr>
     <td>
        <img src='images/3.png' width='250'>
     </td>
     <td>
        <img src='images/5.png' width='250'>
     </td>
     </tr>
   <table>
</div>
<h3><img src='images/patreon.png'>Donate in Patreon</h1>
<p>
  <b>Tier:</b>
  <pre><a href='https://bit.ly/2wzXPKQ'>https://bit.ly/2wzXPKQ</a></pre>
</p>
<h3><img src='images/bitcoin.png'>Donate Some Crypto</h1>
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



