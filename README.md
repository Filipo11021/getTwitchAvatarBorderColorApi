# getTwitchAvatarBorderColorApi

```js
fetch('baseUrl/color', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
   },
   body: JSON.stringify({ 
     streamer: 'lewus', 
     code: code 
   })
})
```

## response

```js
{
  "color": "#00FA04",
  "streamer": "lewus"
}
```

### env
* CODE
* TWITCH_API_ID
