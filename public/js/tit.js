let apiurl = 'https://rfrk.ru/tit/formResponse'
let number = window.location.search.split("?")[1];
document.getElementById("number").innerText = number;
document.getElementById("prev").href = "?" + (parseInt(number) - 1);
document.getElementById("next").href = "?" + (parseInt(number) + 1);
//
function func(url, number, status) {

    return fetch(url, {
        "headers": {
            "accept": "application/xml, text/xml, */*; q=0.01",
            "accept-language": "en,ru;q=0.9,es;q=0.8,zh;q=0.7,th;q=0.6,en-US;q=0.5,an;q=0.4,und;q=0.3",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "pragma": "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://rfrk.ru/tit/?" + number,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "entry.1134586381=" + number + "&entry.1496506828=" + status + "&entry.807958025=12312&entry.703388132=3123",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
}

function add() {
    func(apiurl, number, "1")
        .then(data => alert("Кормушка пополнена"))
        .catch(function(error) {
            console.log('request failed', error)
        })
}
document.getElementById("add").addEventListener("click", add);

function empted() {
    func(apiurl, number, "0")
        .then(data => alert("Высылаем волонтера"))
        .catch(function(error) {
            console.log('request failed', error)
        })
}
document.getElementById("empted").addEventListener("click", empted);

//yandex baloons
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
     // center: [43.89645442, 42.73835063],
     center: [43.9002,42.7380],
      zoom: 17,
    },
    {
      
    }
  );
  myMap.geoObjects
    .add(
      new ymaps.Placemark(
        [43.897302, 42.729055],
        {
          balloonContent: "пополнена вчера",
          iconCaption: "43",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    )

    .add(
      new ymaps.Placemark(
        [43.935768, 42.721457],
        {
          balloonContent: "пополнена сегодня",
          iconCaption: "0",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [43.896057, 42.717824],
        {
          balloonContent: "пополнена сегодня",
          iconCaption: "2",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [43.88118, 42.692941],
        {
          balloonContent: "пополнена сегодня",
          iconCaption: "8",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    )
//
.add(
      new ymaps.Placemark(
        [43.9005,42.7376],
        {
          balloonContent: "пополнена сегодня",
          iconCaption: "9",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [43.9003,42.7384],
        {
          balloonContent: "пополнена сегодня",
          iconCaption: "10",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [43.9002,42.7380],
        {
          balloonContent: "пополнена сегодня",
          iconCaption: "11",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [43.9002,42.7377],
        {
          balloonContent: "пополнена сегодня",
          iconCaption: "12",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    )             
    .add(
      new ymaps.Placemark(
        [43.941397, 42.686938],
        {
          balloonContent: "пополнена вчера",
          iconCaption: "тур",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    );
}