# Frontend Application

The Frontend structure of this application was built using React + Vite. I have implemented a simple login authentication which allows the user to view the customers data when there is an available active session.

## Run node package installation

Run `npm install` from your terminal on the `fe_dev_test` folder.

## Start the Frontend Application

Run `npm run dev` from your Terminal to start the frontend application from the `fe_dev_test` folder. Visit the URL generated from your terminal after running the command. This is usually http://localhost:5173, if not copy and paste the URL that was generated.

## Payload and Data

Payload samples are preset on the postman collection, feel free to test or play with it.

### api/login sample response

```
{
    "message": "Login successful",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTljOWM5Zi1hNDYzLTcxMTEtOGU5NS1iNWFlOWVmYjc2NTkiLCJqdGkiOiIwZTU2NjU4M2VjYjE5ODU4MjRiYjQ2ZmQ4YzczZDNhMzdjZGVkMmFlNzI5ZjE4ZTA2NzRlNDI5NDEzY2Y4YWM2MTYzMTAwZGZkZTg1MDEwMiIsImlhdCI6MTc3MjE1NjU2Mi4yNjIxOTEsIm5iZiI6MTc3MjE1NjU2Mi4yNjIxOTIsImV4cCI6MTc3NDU3NTc2Mi4yNTg4OTEsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.GRewB3g_pULFoGrTlZNW7l38GIxZdvphTuBFEuZQxQtCuGWaFUOIyNNLstglFwxBuRQv30Z_YrFh1hZiPR-pLssLtKoa2rLC1zZ499AwMn42EoULwRnSVVZeDts-z7Znnu8mjRl3zXiPyNTfSV5JWM7_WwPJK04EYmMJa4wMjly6nIi7aPBMrRDPZuOAJzgqvRT0qxWkQLQ8WLeiLn-KGkP_ktxGw0Gw7Cv6SYjcGnDRyeXMsyc1rrtQVx1Q2V5fDe_1YSu0h8zg8ZLte4Enimtbgbs3dLkyamZr1E4r7IRsjhLzkAL-G262TRYlVhIxnboTy8xnKTkjo-uyJJ1t_nbSHnEyBAGs27G1HmXFUCIHSFoZf-Ahw2PEDcWaFx8QLGTaXv9uUYnn-ovray_8B5xazci-bubKFFyyrqZ5uwBZ-IOmQAOzRezyTF7nxw6i3yrPzHZdmnQIdfJZs_ldjc-jAOoheuu3dQBxnD1jw19Y981tbhtHtOz68XrpXerws10wWZwOTttzolN2pPR4BeWdNYP5kfpnd87jKMMkV8XOJvJZ7Vje8hCZNwi-Q_5A-2ajJBCY6GgKbGzideX0LLxJDrCe1Lv7jtJpEAdGXXjE3WYfXtfJYAIKZGQyanXo8YAXRPHD8cIF3EDzlZusyxWw1SgtE0N4eH_AhJ8vN40"
}
```

### api/customers sample response

```
{
    "data": [
        {
            "id": 1,
            "first_name": "Laura",
            "last_name": "Richards",
            "email": "lrichards0@reverbnation.com",
            "gender": "Female",
            "ip_address": "81.192.7.99",
            "company": "Meezzy",
            "city": "Kallithéa",
            "title": "Biostatistician III",
            "website": "https://intel.com/aliquam/lacus/morbi/quis.png?ante=in&vivamus=sapien&tortor=iaculis&duis=congue&mattis=vivamus&egestas=metus&metus=arcu&aenean=adipiscing&fermentum=molestie&donec=hendrerit&ut=at&mauris=vulputate&eget=vitae&massa=nisl&tempor=aenean&convallis=lectus&nulla=pellentesque&neque=eget&libero=nunc&convallis=donec&eget=quis&eleifend=orci&luctus=eget&ultricies=orci&eu=vehicula&nibh=condimentum"
        },
        {
            "id": 2,
            "first_name": "Margaret",
            "last_name": "Mendoza",
            "email": "mmendoza1@sina.com.cn",
            "gender": "Female",
            "ip_address": "193.204.172.141",
            "company": "Skipfire",
            "city": "Jiashi",
            "title": "VP Marketing",
            "website": "http://printfriendly.com/in/lectus/pellentesque/at/nulla/suspendisse/potenti.jpg?id=et&pretium=magnis&iaculis=dis&diam=parturient&erat=montes&fermentum=nascetur&justo=ridiculus&nec=mus&condimentum=vivamus&neque=vestibulum&sapien=sagittis&placerat=sapien&ante=cum&nulla=sociis&justo=natoque&aliquam=penatibus&quis=et&turpis=magnis&eget=dis&elit=parturient&sodales=montes&scelerisque=nascetur&mauris=ridiculus&sit=mus"
        },
        {
            "id": 3,
            "first_name": "Craig",
            "last_name": "Mccoy",
            "email": "cmccoy2@bluehost.com",
            "gender": "Male",
            "ip_address": "75.162.167.180",
            "company": "Quatz",
            "city": "Srpska Crnja",
            "title": "Senior Sales Associate",
            "website": "https://cdc.gov/iaculis.png?vulputate=sapien&justo=varius&in=ut&blandit=blandit&ultrices=non&enim=interdum&lorem=in&ipsum=ante"
        },
        {
            "id": 4,
            "first_name": "James",
            "last_name": "Moore",
            "email": "jmoore3@apache.org",
            "gender": "Male",
            "ip_address": "45.178.146.202",
            "company": "Bubblemix",
            "city": "Karangduren Dua",
            "title": "Physical Therapy Assistant",
            "website": "http://clickbank.net/leo/pellentesque.html?nisl=metus&aenean=arcu&lectus=adipiscing&pellentesque=molestie&eget=hendrerit&nunc=at&donec=vulputate&quis=vitae&orci=nisl"
        },
        {
            "id": 5,
            "first_name": "Benjamin",
            "last_name": "Cooper",
            "email": "bcooper4@biglobe.ne.jp",
            "gender": "Male",
            "ip_address": "98.77.184.45",
            "company": "Youtags",
            "city": "Xiayunling",
            "title": "Account Coordinator",
            "website": "http://oaic.gov.au/in.js?odio=vel&odio=pede&elementum=morbi&eu=porttitor&interdum=lorem&eu=id&tincidunt=ligula&in=suspendisse&leo=ornare&maecenas=consequat&pulvinar=lectus&lobortis=in&est=est&phasellus=risus&sit=auctor&amet=sed&erat=tristique&nulla=in&tempus=tempus&vivamus=sit&in=amet&felis=sem&eu=fusce&sapien=consequat&cursus=nulla&vestibulum=nisl&proin=nunc&eu=nisl&mi=duis&nulla=bibendum&ac=felis&enim=sed&in=interdum&tempor=venenatis"
        },
        {
            "id": 6,
            "first_name": "Terry",
            "last_name": "Ruiz",
            "email": "truiz5@unc.edu",
            "gender": "Male",
            "ip_address": "188.77.133.124",
            "company": "Nlounge",
            "city": "Souflí",
            "title": "",
            "website": ""
        },
        {
            "id": 7,
            "first_name": "Julia",
            "last_name": "Kennedy",
            "email": "jkennedy6@behance.net",
            "gender": "Female",
            "ip_address": "11.184.89.216",
            "company": "Divanoodle",
            "city": "Meixi",
            "title": "VP Product Management",
            "website": "http://quantcast.com/lobortis/convallis/tortor/risus.jpg?cum=tincidunt&sociis=eget&natoque=tempus&penatibus=vel&et=pede&magnis=morbi&dis=porttitor&parturient=lorem&montes=id&nascetur=ligula&ridiculus=suspendisse&mus=ornare&etiam=consequat&vel=lectus&augue=in&vestibulum=est&rutrum=risus&rutrum=auctor&neque=sed&aenean=tristique&auctor=in&gravida=tempus&sem=sit&praesent=amet&id=sem&massa=fusce&id=consequat&nisl=nulla&venenatis=nisl&lacinia=nunc&aenean=nisl&sit=duis&amet=bibendum"
        },
        {
            "id": 8,
            "first_name": "Jesse",
            "last_name": "Mcdonald",
            "email": "jmcdonald7@etsy.com",
            "gender": "Male",
            "ip_address": "212.20.163.206",
            "company": "Realblab",
            "city": "Konibodom",
            "title": "Structural Engineer",
            "website": "https://issuu.com/sit/amet/erat.jsp?pede=nullam&libero=sit&quis=amet&orci=turpis&nullam=elementum&molestie=ligula&nibh=vehicula&in=consequat&lectus=morbi&pellentesque=a&at=ipsum&nulla=integer&suspendisse=a&potenti=nibh&cras=in&in=quis&purus=justo&eu=maecenas&magna=rhoncus&vulputate=aliquam&luctus=lacus&cum=morbi&sociis=quis&natoque=tortor&penatibus=id&et=nulla&magnis=ultrices&dis=aliquet&parturient=maecenas&montes=leo&nascetur=odio&ridiculus=condimentum&mus=id&vivamus=luctus&vestibulum=nec&sagittis=molestie&sapien=sed&cum=justo&sociis=pellentesque&natoque=viverra&penatibus=pede&et=ac&magnis=diam&dis=cras&parturient=pellentesque&montes=volutpat&nascetur=dui&ridiculus=maecenas&mus=tristique&etiam=est&vel=et&augue=tempus&vestibulum=semper&rutrum=est&rutrum=quam&neque=pharetra&aenean=magna&auctor=ac"
        },
        {
            "id": 9,
            "first_name": "Harry",
            "last_name": "Edwards",
            "email": "hedwards8@mapquest.com",
            "gender": "Male",
            "ip_address": "147.164.202.13",
            "company": "Jabberstorm",
            "city": "Bratslav",
            "title": "Marketing Manager",
            "website": "http://vk.com/luctus/et/ultrices.png?lobortis=nunc"
        },
        {
            "id": 10,
            "first_name": "Peter",
            "last_name": "Ellis",
            "email": "pellis9@wordpress.com",
            "gender": "Male",
            "ip_address": "73.114.57.213",
            "company": "Photolist",
            "city": "Brody",
            "title": "Research Associate",
            "website": "https://rediff.com/sit/amet/diam.aspx?non=donec&sodales=ut&sed=mauris&tincidunt=eget&eu=massa&felis=tempor&fusce=convallis&posuere=nulla&felis=neque&sed=libero&lacus=convallis&morbi=eget&sem=eleifend&mauris=luctus&laoreet=ultricies&ut=eu&rhoncus=nibh&aliquet=quisque&pulvinar=id&sed=justo&nisl=sit&nunc=amet&rhoncus=sapien&dui=dignissim&vel=vestibulum&sem=vestibulum&sed=ante&sagittis=ipsum"
        }
    ],
    "pagination": {
        "current_page": 1,
        "last_page": 100,
        "per_page": 10,
        "total": 1000
    }
}
```
