const method = 'GET'
const url = 'https://cloud-api.yandex.net/v1/disk/resources?path=%2FMp3Player&fields=_embedded.items'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'OAuth AQAAAAA1HLYsAADLW7CCIJv7GUv1v9u8ia5tjpM'
}
const [data, setData] = useState({})
  useEffect(() => {
    fetch(url, {
      method,
      headers
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log(data)
      })
  }, [])