let baseUrl = 'http://localhost:8081';
if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://localhost:8081';
}

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase();
  url = baseUrl + url;

  if (type == 'GET') {
    /** 数据拼接字符串 */
    let params = '';
    Object.keys(data).forEach(key => {
      params += key + '=' + data[key] + '&';
    })

    if (params !== '') {
      params = params.substr(0, params.lastIndexOf('&'));
      url = url + '?' + params;
    }
  }

  if (window.fetch && method == 'fetch') {
    let request = {
      credentials: 'include',
      method: type,
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.Authorization
      },
      mode: "cors",
      cache: "force-cache"
    }

    console.log(request);

    if (type == 'POST') {
      Object.defineProperty(request, 'body', {
        value: JSON.stringify(data)
      })
    }

    try {
      const response = await fetch(url, request);
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject;
      }

      let sendData = '';
      if (type == 'POST') {
        sendData = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj);
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    });
  }
}

