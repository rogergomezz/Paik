db.coches.insertMany(
    [{
            marca: 'Seat',
            modelo: 'Leon FR',
            descripcion: "Coche de gama media alta con toques deportivos",
            img: "https://render.seat.es/SEA/RENDER/PRD/render/fast/H4sIAAAAAAAAAFvzloG1tIhBPNonK7EsUS8zXy84tSgzMSezKjEpJ9V63QXONcHX33oyMTBUFDAwMJjXFTFYJufn6iXn5-Wk5hfrFaXmpaQWFacWlWUmpwK15yQCBYEKcvPzoCZ5pOYUpBaphFQWpDJAgRDQtCIGPrCNOYl56XqueaW5yJIFJQwcXgGu7vE-nk4lDKwlpUVJ-XWFDHUMTCUMPGCJwFBHH8-QyOIiBkGEMZ55JanpqUVCjxYs-d7YbsHEwOjJwFqWmFOaCrROAKHOrzQ3KbWobc1UWe4pD7phfguA2cDp6-nrGh8SGeBawsCVmZuYnqqfVZCaDpPmDfB0DgkNco13DApyjCwGiXICtfPB5IWcHJ293YP8Q_1c4qFKgc40JiLU8vJSk0vyi_Q8EosznPNTYOHFyMTA6snAVG4IIoxAhDGIMAERphUFxSu8tj6_JK3G3GF79qOBXaf6G_PCEga29Jz8pMQcmKPYYS4B8UUOBLFXZzKmBfTU-ged3qt3I6H55LISBj4fV3-_-GDneFMX3dSKEpBKcYj6uWVHrSPvT0pr_Ss1y483VHgqU8Y7kIQUkpptvf1n6g67C7LK3wjfdG65pXbnPjEMNYeOaLbcXunL8SHEuVo7qPJU-rcidDWSpsnOok0JMf5fGp0Yd6-S-zVXhRNdjdmL-2GmO68zJ3lfi5AyfH8uoGCKNbqaM881utNUXI6Z6-wN7nQ00_isGV6PrkYmIGaJuc71fQuZKr9U1Hpev38_JB1dzQvXxmnNtap_T29pNlBK5fifPfdANbqarjdn4v_OD26_NmmbnD1TvcEjxZvu6Go-TbvCM3FNX4qL-jLJWi257v5s1W_oauY1eR6Svu5WF68_W_GH6MqUPMkeRnQ14WEv78rq1K08XH33MEPhCq_9ptX6YDWwqGYJ9oxyhSVLVgYYi-kCamZxys_PSU3MO6tQ1HB1zq93wMwSBcssBXBNDAwAXLpTmiEEAAA",
            coche: {
                color: "Blanco",
                combustible: "Gasolina",
                cilindrada: 1984,
                potencia: 190,
                kilometros: 12984,
                matricula: "2445LRQ",
                marchas: "Automatico"
            },
            extras: {
                techoSolar: "true",
                altavocesBeats: "false",
                camaraTrasera: "true",
                lucesLed: "true",
                frenadoAutomatico: "false",
                velocidadCrucero: "true"
            },
            precio: "24.990€",
            fechaFabricacion: "23/05/2020",

            consumo: {
                extraurbano: "5,2l /100km",
                urbano: "8l /100km",
                media: "6.2l /100km"
            },

            contact: {
                telf: 635225774,
                email: "ContactPaik@paik.es",
                fax: 935225774
            },
        },
        {
            marca: 'Volkswagen',
            modelo: 'Golf R',
            descripcion: "Coche de alta gama de ambito deportivo",
            img: "https://autoproyecto.com/wp-content/uploads/2020/11/2022_Golf_R_European_model_shown-12437.jpg",
            img2: "",
            coche: {
                color: "Negro",
                combustible: "Gasolina",
                cilindrada: 1984,
                potencia: 320,
                kilometros: 34584,
                matricula: "1242KWP",
                marchas: "Automatico"
            },
            extras: {
                techoSolar: "true",
                altavocesBeats: "true",
                camaraTrasera: "true",
                lucesLed: "true",
                frenadoAutomatico: "true",
                velocidadCrucero: "true"
            },
            precio: "49.999€",
            fechaFabricacion: "12/08/2020",

            consumo: {
                extraurbano: "6.7l /100km",
                urbano: "9l /100km",
                media: "7.9l /100km"
            },

            contact: {
                telf: 635225774,
                email: "ContactPaik@paik.es",
                fax: 935225774
            },
        },
        {
            marca: 'Seat',
            modelo: 'Ibiza FR',
            descripcion: "Coche de gama media deportivo con bajos consumos",
            img: "https://render.seat.es/SEA/RENDER/PRD/render/fast/H4sIAAAAAAAAAFvzloG1tIhBPNonK7EsUS8zXy84tSgzMSezKjEpJ9V63QXONcHX33oyMTBUFDAwMNjWFTFYJufn6iXn5-Wk5hfrFaXmpaQWFacWlWUmpwK15yQCBYEKcvPzoCZ5pOYUpBaphFQWpDJAgRDQtCIGPrCNOYl56XqueaW5yJIFJQwcXgGu7vE-nk4lDKwlpUVJ-XWFDHUMTCUMPGCJwFBHH8-QyOIiBkGEMZ55JanpqUVCjxYs-d7YbsHEwOjJwFqWmFOaCrROAKHOrzQ3KbWobc1UWe4pD7phfguA2cDp6-nrGh8SGeBawsCVmZuYnqqfVZCaDpPmDfB0DgkNco13DApyjCwGiXICtQvA5IWcHJ293YP8Q_1c4qFKgc40JiLU8vJSk0vyi_Q8EosznPNTYOHFyMTA6snAVG4IIoxAhDGIMAERphUFxSu8tj6_JK3G3GF79qOBXaf6G_PCEga29Jz8pMQcmKPYYS4B8UU6jppe1iyztP6voOg0caepdMiC6e9LGPg9nTyjHOODneNNXXRTK0pASsUhGgwXa0z-fjI6op1RyJxTrmXL3Hij5yUM3D6u_n7xEQFoiudbSe1fs_9a-GsdKbdPbPPXXtvyOhkkIYWkJnOrZPL_mYwMR34V2O-t-mS0-3GtNrqagkyOpxL2rPF7BXZmSjC8atj8LjgQXU1sZ63skicnTzRY1XzOKX26iumH7g90NTtKw6NSzCZ3LC88mHrE4n39laOSB9HV_Nyxa8HBs64yZzd6vOzl83BX-2r9E12NQE34uhPf7s3MZvs2h-P7Lq5Z8ZPF0NU4fmS4PnGDz7uD8ffj5Taf9QtdeZ4DoQZESIMIGSQt_mxMUtLzN99LSNbeFCJ-Im_a30__CWhxSJbZGpDCeuduak7H939L79RyqCaiu2Sus7L6h20vbPkm5D2afLL44GnuQyvBamBJgiXYM8oVlnxZGWAspguomcopPz8nNTHvrEJRw9U5v94BM1UULFMVwDUxMAAAtndjZUkEAAA",
            img2: "",
            coche: {
                color: "Rojo",
                combustible: "Gasolina",
                cilindrada: 999,
                potencia: 110,
                kilometros: 2155,
                matricula: "9811LXM",
                marchas: "Manual"
            },
            extras: {
                techoSolar: "false",
                altavocesBeats: "true",
                camaraTrasera: "true",
                lucesLed: "true",
                frenadoAutomatico: "true",
                velocidadCrucero: "true"
            },
            precio: "17.999€",
            fechaFabricacion: "29/03/2021",

            consumo: {
                extraurbano: "4.7l /100km",
                urbano: "6.7l /100km",
                media: "5.4l /100km"
            },

            contact: {
                telf: 635225774,
                email: "ContactPaik@paik.es",
                fax: 935225774
            },
        },
    ]
 )


/*db.users.insert({
    googleId: 110296827098430592941,
    displayName: 'Daniel Mas Carré',
    firstName: 'Daniel',
    lastName: 'Mas Carré',
    image: 'https://lh3.googleusercontent.com/a-/AOh14GiE1tcw…',
    admin: true
}),
db.users.insert({
    googleId: '114525095049069369991',
    displayName: 'Roger Manuel Gómez Morenilla',
    firstName: 'Roger Manuel',
    lastName: 'Gómez Morenilla',
    image: 'https://lh3.googleusercontent.com/a-/AOh14Gg-Vbav8QkMKnr_EV5tf6ei12bmq9249YrRivwF=s96-c',
    admin: true
})
db.users.insert({
googleId: '109081168857070353394',
displayName: 'Ivan Mas Carre',
firstName: 'Ivan',
lastName: 'Mas Carre',
image: 'https://lh3.googleusercontent.com/a-/AOh14GipuM0tl3M3XI-PBeL5kg3IIjG5ruCBF5ywrUW4=s96-c',
admin: true
}) */