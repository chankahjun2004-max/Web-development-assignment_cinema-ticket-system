let url = window.location.href;
// console.log(url);
let url_segment = url.split('?');
// console.log(url_segment);

let play_btn = document.getElementById('play')
let video = document.getElementById('video')


// Play button开始和暂停
play_btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    } else {
        video.pause()
        video.style.display = 'none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
    }
})

video.addEventListener('ended',() =>{
    video.play();
})

let date = new Date();
let main_date = date.getDate();
// console.log(main_date);


    Array.from(document.getElementsByClassName('date_point')).forEach((el) => {
        if (el.innerText == main_date) {
            el.classList.add('h6_active');
        }
    });



    let pvr = [
        {
            pvr: 'CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 13,
           
        },
        {
            pvr: 'CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 14,
           
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 15,
           
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',           
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 16,
           
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 17,
           
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 18,
           
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 19,
           
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 20,
           
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 21,
           
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 22,
           
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 23,
           
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            g: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ],
            a: [ 2, 10],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 24,
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [1,2,9,10 ],
            g: [ 15,17],
            f: [ 5, 6, 15, 17, 18 ],
            e: [ 2, 7, 8, 17, 18 ],
            d: [ 5, 16, 15, 23, 22 ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [  1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            a: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 25,
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ ],
            g: [ ],
            f: [ 5, 6, 18 ,20,21],
            e: [ 2, 7, 8, 15,17,19],
            d: [ 5, 16,  ],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 8, 5 ,10,11,13,20,21,24],
            a: [ ],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 26,
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ ],
            g: [ ],
            f: [ ],
            e: [  17, 18 ],
            d: [ 5, 16],
            c: [ 1, 2, 11, 12, 19 ],
            b: [ 5, 6, 15, 17, 18],
            a: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 27,
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ ],
            g: [ ],
            f: [ ],
            e: [ ],
            d: [  ],
            c: [ ],
            b: [  ],
            a: [ ],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 28,
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ ],
            g: [ ],
            f: [ ],
            e: [ ],
            d: [  ],
            c: [ ],
            b: [  ],
            a: [ ],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 29,
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ ],
            g: [ ],
            f: [ ],
            e: [ ],
            d: [  ],
            c: [ ],
            b: [  ],
            a: [ ],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 30,
        },
        {
            pvr: 'Mr.CK',
            movie: 'avenger',
            loc: 'TarUmt',
            audi: 1,
            type: '2D',
            series: [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ],
            row_section: 3,
            seat: 25,
            h: [ ],
            g: [ ],
            f: [ ],
            e: [ ],
            d: [  ],
            c: [ ],
            b: [  ],
            a: [ ],
            price: [ 15, 15, 18, 18, 18, 18, 20, 20 ],
            date: 31,
        },
    
]




let addSeats = (arr) => {
    arr.forEach((el, i) => {
        const {series, row_section, seat, price, a, b, c, d, e, f, g, h} = el;

        //  Create Row
        for (let index = 0; index < series.length; index++) {
            let row = document.createElement('div');
            row.className = 'row';

            let booked_seats = [];
            booked_seats = [...eval(series[index].toLocaleLowerCase())];
            
            // Create Seats
            for (let seats = 1; seats <= seat; seats++) {
                if (seats === 1) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }

                let li = document.createElement('li');
                let filter = booked_seats.filter(el => el === seats);

                if (filter.length > 0) {
                    li.className = "seat booked";
                } else {
                    li.className = "seat";
                }

                li.id = series[index] + seats;
                li.setAttribute('book', seats);
                li.setAttribute('sr', series[index]);
                li.innerText = price[index];   

                // Restore selected state from local storage
                const storageKey = `${li.id}_${main_date}_${url_segment[1]}`;
                if (localStorage.getItem(storageKey) === 'selected') {
                    li.classList.add('booked'); // Use 'selected' class instead of 'booked' to indicate it is selected by the user
                }

                li.onclick = () => {
                    if (li.className !== 'seat booked') {
                        li.classList.toggle('selected');

                        // Use date and movie in the localStorage key
                        const storageKey = `${li.id}_${main_date}_${url_segment[1]}`;

                        // Save the state to local storage
                        if (li.classList.contains('selected')) {
                            localStorage.setItem(storageKey, 'selected');
                        } else {
                            localStorage.removeItem(storageKey);
                        }
                    }
                    let len = Array.from(document.getElementsByClassName('selected')).length;
                    document.getElementById('book_ticket').style.display = len > 0 ? 'unset' : 'none';
                };
                
                row.appendChild(li);

                if (seats === seat) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span); 
                }
            }
            document.getElementById('chair').appendChild(row);
        }
    })
}



let data = pvr.filter(obj => obj.date == main_date && obj.movie  == url_segment[1]);
// console.log(data);

addSeats(data);
let offDate = () => {
    Array.from(document.getElementsByClassName('date_point')).forEach(el => {
        el.classList.remove('h6_active')
    })
}

Array.from(document.getElementsByClassName('date_point')).forEach(el =>{
    el.addEventListener('click',() => {
        if (el.innerText > date.getDate()-1) //上面date 可以选
        {
            offDate();
            el.classList.add('h6_active');
            main_date = +el.innerText;
            document.getElementById('chair').innerHTML = '';
            let data = pvr.filter(obj => obj.date == main_date && obj.movie  == url_segment[1]);
// console.log(data);
            addSeats(data)

            // Clear the selected seats from the previous date
            Array.from(document.getElementsByClassName('seat')).forEach(seat => {
                seat.classList.remove('selected');
            });
        }
    })
})


document.getElementById('book_ticket').addEventListener('click',() => {

    let selectedSeats = [];
    let movie = url_segment[1];
    let loggedInUser = localStorage.getItem('email'); // Assuming email is used as a unique identifier

    Array.from(document.getElementsByClassName('selected')).forEach(el => {
        let seat_no = el.getAttribute('book')
        let seat_sr = el.getAttribute('sr').toLocaleLowerCase();
        let seat_price = el.innerText;

        selectedSeats.push({
            userEmail: loggedInUser, 
            movie_name: movie,
            seat_no: seat_no,
            seat_sr: seat_sr,
            seat_price: seat_price,
            date: main_date 
        });

        let storedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
        storedSeats = storedSeats.concat(selectedSeats);
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        
        

        let obj = {
            movie: url_segment[1],
            date : main_date
        }

        let getData = pvr.map((obj) => {
            if (obj.movie === url_segment[1] && obj.date === main_date) {
                obj[seat_sr].push(+seat_no);
            }
            return obj;
        });

        // console.log(getData);
        document.getElementById('chair').innerHTML = '';
        let data = getData.filter(obj => obj.date === main_date && obj.movie === url_segment[1])
        addSeats(data);

        
        window.location.href="../../HTML FILES/FnB.html";    
        
    })
})






