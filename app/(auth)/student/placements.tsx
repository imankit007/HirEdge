import { ScrollView, StyleSheet, FlatList, View, Text, Image } from "react-native"
import JobCard from "../../../components/JobCard/JobCard";
import PastJobCard from "../../../components/JobCard/PastJobCard";


const PlacementPage = () => {

    const jobs = [
        {
            id: 1,
            name: "Extreme Networks",
            img: "https://companieslogo.com/img/orig/EXTR-adff0e4b.png?t=1688818574"
        },
        {
            id: 2,
            name: "Nextuple",
            img: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/445b15cf153a9638b4db"
        },
        {
            id: 3,
            name: "Persistent Systems",
            img: "https://companieslogo.com/img/orig/PERSISTENT.NS-d1e466d3.png?t=1604067042"
        },
        {
            id: 4,
            name: "Societe Generale",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAMAAADdXVr2AAAAOVBMVEUAAADtGjr////sACzzGzuaESbtEDXtADD0i5XsACjsACbyADH3iZTyACiWABbBh4yTAACAhYSFhYWwJJlUAAAA7UlEQVR4nO3PSU7DQAAAQRPssBOS/z8WcbWENAfQuKOqF3QvD3dtmR3wv+yV2SuzV2avzF6ZvTJ7ZfbK7JXZK7NXZq/MXpm9Mntl9srsldkrs1dmr8xemb0ye2X2yuyV2SuzV2avzF6ZvTJ7ZfbK7JXZK7NXZq/MXpm9Mntl9srsldkrs1dmr8xemb0ye2X2yuyV2SuzV2avzF6ZvR/nx4P5072n59PBvNz33uvg3jri7X32zt7HUPe6bCM+L7N39r6GurdlzHX2zt5g96Db7J09ewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwG++ASMAbFqyDCBTAAAAAElFTkSuQmCC"
        },
        {
            id: 5,
            name: "Daimler",
            img: "https://companieslogo.com/img/orig/DAI.DE-34e92f6e.png?t=1597354531"
        },
        {
            id: 6,
            name: "Mercedez Benz",
            img: "https://companieslogo.com/img/orig/DAI.DE-34e92f6e.png?t=1597354531"
        },
        {
            id: 7,
            name: "Sony",
            img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYSFRgVFBUYGRgaGRgcGhgcGBocGhgYHBoaGhgYGhocIS4lHCQrIRwcJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMBwYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAKcBLQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIDBgcFBAj/xABDEAABAwICBggDBQUIAgMAAAABAAIREiEDMQQiMkFhcQUGBxNRgZGhQsHxFCNS0fAzYrGy4RUkQ1RykqKzc5NTY4L/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6259dhaL3/XFK4FG/Kd10dA2M+F7fqFIiJO17zusghp7vavPh/VQGUmo5cM7qzb7flNlAmdbZ45cEAtqNQy97I495laPHjy5IZmG7PtxupfbY84vyQQXSKN+U7rfRGPo1Tmb29PkhiJG17zvt6oyDt58bWQQxvd3N5tZTRevdnG9GSdvLdNrrQOvPWpwLtF0d0AWxHtOXjhtP8x8vFB6nWTrrg4LqMId5iCxEwxh/ecJk8ByJC0bpLrZpekbWM5jfwYeoB5g1Ec3FeGEQZMXGc8y9znHxc4n+KxoiAiIgIiICIiAiIgIiIC+nR+kMXDgsxcRkfhe5v8AA+y+ZEG19G9etIwyBjRjNykgNeBwc0QfMSfELonRfTeDpzJwXXF3NdZzeYv6i3FcQX0aBpr9He3EwnFjm5Ee4I3g7wg7xXAo35TuujT3djefD+q8jq104zTcGsQMVtnsm7XbiPFp3HgRmCvXZfbz3TZBAZSajlwzupLajUMveyCSdbZ45cEvMN2faN90B33mVo8ePLkhfUKBnlO62f8ABS62x5xfl81BiJG17zvt6oDH0apzN7cVDW93c3m1lLIO3nxtbcjJO3lum10Ci9e7ON6Ob3lxusl5j4PaOaOBH7PLfzQHN7vWF5t8/klE6+/OOShgLbuyy8boQSahs5xwGdkEtHeXNoSuvVy48keK9m0Z7lLnBwpbn+WaCC6nV9+aH7vK8/L6o1waKTtfnldG6u1ect6AW0ivzjn9Ua2vWNot8/moAINR2c/I5W80eC4y3LLwug8XrX019n0Z+IID7NZ/rdMG+dIqdH7q4wXTmZPibk8Sd63vtV0+p+BhA2DHPI8S40NPlS71WgygvKSqSkoLykqkpKC8pKpKSgvKSqSkoLykqkpKC8pKpKSgvKSqSkoLykqkpKC8pKpKSg9vqr0wdE0hjydQmjEG6gna/wDyYd5Ebyu1BveZ2iy/PRK7f1Z0l2kaJgPBk0BrjlLm6jj6tKD1q69XLjyQvp1fKealzg4Utz9Ms1AcGik7X55XQD93lefl9UppFfnHP6ozV2rzlvyzUAEGo7OfkcreaCQyu5tFvRA7vLG0XRzS4y3L0R7qrNsfRAq+DdlKF3d2zm6VCKfiynjzRrqNq5KCGEus/Lja6kzMDZ9o33SvvLZRfx4fNK41PKefBAeadjzi6lwAEt2vXnZRPd2znyQsp1s+GWfFBLQCJdtenKyhmtt+U25pRXrZcOXFP2nCPPP6IIEk0nZ9oGV/RHEgw3Lhe/NTXVqeU8uHkldGrnN5y4fJBybtPAGmtAy7hm+fjxFqErbO09tOmgTP3OH/AD4i0+UGSUlY5SUGSUlY5SUGSUlY5SUGSUlY6klBklJWOUlBklJWOUlBklJWOUlBklJWOUlBklJWOUlBkldh7PXOGgYVP4sWbT/iPjkuNSuy9nOLToGGYmXYvtiPCDZ3AAS3a9edlLQCJdteh4WUU062c7ss0oq18t8cuKAzW292U25/JQJJpOz7QMr+in9pwjzz+iV1anlPLh5IIcSDDcuF777qXAN2M98XslVGrnN5yzslPd3zm3ggQIn4veeSCDt57ptZKPj84/qlPeXyiyA4h1mZ8LW/UICIg7XvO66OaG3bc5eNkDQRV8WccRlZAZq7flN1ABBl2z6jhZS0V7Voy3I0lxpdl+WSAQSZbs+g42R+tsecW5I4lppGz+ed0dqbN5z3oBIIgbXvIzv6qWENs7Pje3NQWgCobWccTnbzUtaHXdnl4IOPdqEjTRVn3DN8/HiLUKlt3ak8nTWk59xh/wA+ItNqQZKkqWOpKkGSpJWOpKkGSpKljqSpBkqSpY6kqQZJSpY6kqQZKklY6kqQZKkqWOpKkGSUqWOpKkGSpKljqSpBkqXZ+zZwGgYc73YsWn/EfK4pUu1dmjQ7o/Dnc7Fj/wBj0G0AEGXbPG/KyEEmRs+gjfZS0lxpdl+SgktNI2fzzugl+tsecW5fNCQRA2veRnf1R2ps3nPfkhaAKhtZxxOdvNAYQ2zs+N7brqGS3by3Te6sxodrHP0VWmuzrR5IJvNXw+0ckcSf2eW/ddRUZp+HKeHNSSGWG9BAZ3dzebfP5KaJNe7OOSMkbeXHx/UoZm2z7RvQCO8uLQhfVqi3Hkj77HnCl0Rq7XDPigB1Or781DR3ed5+X1RsRrbXvwRltvyn3QA2nX3Zxz+qgsr1haLfP5qRM32PaN3yUOmdTZ4eP6hBx3tWxKtOB/8Aow/58RaXUtx7WnD7cIy+z4f8+KtQ0LBOLiYeGDBfiMYDE0l72sBjfFUoGExz3BjGuc45NaC5x8YaLlem3q5phbUNE0iOOE8H/aRPsuwdI6N/ZOhuPR+ih7xSIDS5zjkcTEp18SPAewFudaV2h9JsMvLcPPVdgUjjt3tzQanpGC/DdRiMfhu/C9jmO/2uAKo6RmIXQehu0kaQWYXSGBg4mG5zddrbYZkUvexxcDBvUCCIkAr4e19wOnsgz/dcL/t0hBpdSzaNo2JikjCw34hGYYxzyOYYCQtx7OepzdNnSNIBOCwwxgJHeOEElxF6BlAzMjIEHZOuPXZvRpGiaFhYYe0CrVjDwgQC1gY2JdTBzAEtzkgBzrE6t6Y0VHRNIjhhPcfRoJXl4jSxxa9pa4ZtcCHDmDcLa9H7S9PY6pz8N4karsMBoG8Atpd6krofR2NonT2jVYuCA5ppc2dfCfEyzEABgzIORyIzCDh5esf2ln42/wC4L2+m+jX9F6YGkh5w34eLhuIs9gfUwuAM5sLSAfhdC632f9Y8TpHCxHYzMNrmYlOoCGkFrXZOJINzvQcMbiA3BB5I/EAuSBzsu6dcep2F0iytlLccN1MQbLm5hmJGbTNiLtmRIkHknR+n6T0RpLz3bBjNY7Dc3Ea5zaXOY+oUubM0iHAxBKDw/tLPxt9Qrd82JqEeMiPVd0xuseIOivtwZh953bXUkEsqLgzKZi8xPmuXYfXbSBpZ02jA7w4XdFtD6KKmukNrmqWi8xnZBrX2ln42/wC4KzcZrsnA8iCu6dR+tzOkWFjmhmOwS/DGy5uQeyd02IzB4EE652xDSKMLUadGD2ura11bMWl7KXmaaHB1jGYicpDlz8ZosXAcyAq/aWfjb6hdU7HRpFGLLGjRi9z6y01vxS1jC1hmKGhlzG0YBsQMHWTtNc3FczRMPCfhtlpxHhzq3eLA1zYb4EzOYtBIc2qXbOzTDr6Pwr5OxvfFeVw1tgB4CF3DsyqPR2FT+PGmP/K+PZBtpfVqi3HkpDqdTynmjojV2uGfFQIi+17zuQG/d53nw4fVA2nX3Zxz+qMtt+U+/wAkEzfY9o3fJBDm16wtFvS6lzu8sLRdQ6Z1Nnh471L4OxnvjwQKrUb8pQO7uxvN1No/f95UCPjz3T4IIa/vLG2+3p81JfBo3ZTvuj3V2bzv/TmgdAo35cLoDj3dhefFHNpFQz45XRh7vO8+H9VAZSajlwzugs1tQqOftZQw95naPDj9ELajUMveyP8AvMrR48eXJBAfUaN2U77fRS59BpG+9/T5IXSKBnlwtn/BGPo1Tmb29Pkg4t2uNp08Af5fDP8AzxfyWlseQQWkh0iCMw6bEcZW4drbS3TwD/l8L/sxVpuC7Wb/AKm/xCDtGidoJ0YNwuk8DEwMWkGtrQ5jxJFdLTU2SDYA817Wj9fejsQW0pjf9bXs9a2hef140bo7Szh4Wk6QzCxYccLErDYBIDmlztUgkDVJnwjNabj9k2k2OBpOj4jT8Tq2egaHg+qDo40bo3pCaW6LpBi5b3bnDO9TdYZm8rk/aD1RZ0biMdgT3OLVDSZLHtiWzm4EEEEybGTktn6t9RG9GYzNM03S8Jvd1FrQaWVOaWGrEeRIhxsGiTHI672l9bsPT3sw8CThYVRLyCK3ugS0G4a0A3OdR3AEh0rsyc09G6PTu7wH/V3r6vdcZ63h407Sg+au/wAQ3/CXF2H/AMC2OEL2Oz/rt/ZznYWMC7R3uqJF3YTrAuDd7SAJaL2kXkHdusXVbRemo0nRNIYMWAHObD2vAyGI0EOa4C05xYgwIDjNS6f2KB1elG9NOCCdxdOIR5xPqF52i9kumOdGJjaOxm9zTiPd5MLGA/7gtyb0l0f0Do/cNxKngkuY0h2NiPI2ngWblEugAABBq3bTiN+0aO0EVDCeXDfSXgMnhLX+hXs9ip/u+kf+YfyNXMOlulX9IaUcXFcGHEexg3twmEhrReJDQZJtNzaV1/qLoWj9GYeIx2naPiHEfVIexoADQ2IL3Tkg0Ps869v0IMwNIJfo5Ag3LsGRm3e5ni3MZjwPTes3VvA6WwGuDm1Uzg47YdANwDG2w7xPEQbrjnWbqwzQGMLNNwtJqdTSwAOaA2anQ93gB5r6epHXXE6OfS6p+juJLsPewnN2HOR8W5HgboOh9L6BiaN0G/BxQA/Dww11JlsjFEEHeCIO43yC4rUu49dendG0jozHOFpGG+rDaWtD21nWaYoJqB4ESFwqUH26Bp79HxGYuE8sewy1w8d4I3giQRvBIXeurvS2F0xobi9gh04eNhm4Dw1pcGneIc0g5iRkQuAdH6OMXFZhl7WB72ML3bLA4gVm4sJnMLt/UbRtG6NwH4R07R8QvxDiVBzGASxjYgvdOxMzvQa12kdZRo7f7M0RvdtY1rcUgQAxzQW4TeBaQXHjF5cuY1LonaD0Bg4uJpGnM07AdIY4YDaXOJazDw6Q4Yl5pnZ3rm8oMlS7j2YYtPRuERvfj+2M8LhUruvZViBvRuETvfj5cMZ4Qbc5tIqGfHK6BtQqOftZQGUmo5cM7qS2o1DL3sgN+8ztHhx+igOk0bsp32y/gpf95laPHjy5IXyKBnlwtn/BBDn0GBkb34qXN7u4vNrox9Gqcze3FQxvd3N5tb+qCaLV7843I1veXNoslF692fFHN7y43WQHADYz4Xt+oUgCJO17zusoLO7uLzb5/JTROv5xyQG32/KbKoJJh2zxsOF1IHeXNoSuvVy48kEEkGG7PtxurPtsecX5KC+nVz480P3eV5+X1QCBEja95329UYAdvPjayUU6/nHP6oG162UW+fzQcP7XnH7eKs/s+F/PirR6lu/bFiVae05f3bD/AOzFWiygu0AZADkrYWIWTQ4tnOkls84WKUlBkc6o1OufE3PqVFSpKSgvUpa6CHCzhkRYjkcwscpKD7X9I4zhDsfFcPB2K9w9C6F8rYFgIVJSUF6ksqSkoLylSpKSgvKVKkpKC9SWVJSUF5SpUlJQXqXeeykA9GYVX48eJt/jPlcDld77KWV9GYN4h2P74zyg28Ekw7Z42HC6kkgwNn2jfdK69XLjyQvp1fKeaCXW2POL8vmoIESNr3nfb1Q/d5Xn5fVKKdfzjn9UBgB28+NrbkZJ28t02ugZXrZRaOSB3eWNougSZj4faOaOBH7PLfzSv4PKULu7tnN0EMBbd2WXjdCCTUNnOOAzspYS6zsvS6EmaRs/LfdAeK9m0Z7lLnBwpbn6ZZ3UONOx571LgAJbtevOyCGuDRSdr88rozV2rzlv5o0Aip216crI3W292W7mggAg1HZz8jlZS8F125el1Akmk7PyGV/RS4lphuXrfmg4d2yvB6QaR/lsP+fFWgyt87ZwB0g2Mvs2Hx+PFWgVILykqkpKC8pKpKSgvKSqSkoLykqkpKC9SSqSkoLykqkpKC8pKpKSgvUkqkpKC8pKpKSgvK792VMJ6MwY3Px53f4z1+fpX6A7KXEdF4NO92PNp/xnwg3Nzg4Utz9Ms1AcAKTtfnldHANEt2vXnZAARU7P0yysgN1dq85b+agAg1HZz8jlZS3W292W7moEk0nZ+Qyv6IJc0uMty9EearNsfRHEtMNy9b80cA3Yz377IFQin4sp480a6mzrlIEVfF8+SCD+0z3brIFfeWyi/jw+aVxqeU8+COIdZmfC1v1CkERB2ved10ET3ds58koo1s+HPijNXb8puoAIMu2eNxwsgmivWy4cuKftOEeef0UEEmW7PoONlL9bY84tyQK6tTynlw8kro1c5vOXD5ISCIG17zvv6owgWfnum9uaDhXbTh0aeweOjYZH/sxR8lz6pdY7cujHD7NpJH48Jzpv/wDJhj2xFySUF5SVSUlBeUlUlJQXlJVJSUF6klUlJQXlJVJSUF5SpUlJQXlJVJSUF5SpUlJQXlJVJSUF5X6F7J3UdF4BianYxHIYzwvzsXL9SdUujhomhaPgPADmYbZETDyKn/8ANzkHrU062c7ss0oq18t8cuKgAgy7Z43HCyEEmRs+gjfZBP7ThHnn9Erq1PKeXDyR+tsecW5fNCQRA2ved9/VAqo1c5vOWdkp7u+c28EYQLO2t03tuuoZLdvLdN7oJo+Pzj+qU95fKLJBmfh9o5I4k/s8t/NAc2i7bnLxsgbIq+LOOI4KGs7u5vNrevyU0Sa92cb7IDRXtWjyRpLjS7L8kcO8uLR4o59eqLceSASWmkZfnmjtTZvOe/JA6kU7/HmjR3ed58OH1QC2BUNrOOJzt5oxtWsc8vBQGUmvdnG+/wBULK9YWi3z+aDyOtPQ/wDaOi4ujuhpc2WO/DiNMtJ4TY8CV+YdJ0d2G97HtLXMc5rmnNrmmHNPIhfrZzu8sLRe65z2l9Q/tk6Rozf7y1oD2WAx2tFo/fAsJzAA3BBwtFbFwy1xa4FrmkhzSCC0gwQQbgg7lVAREQEREBERAREQEREBERAREQERex1b6u43SGKMLBbYQXvINOG0/E4+RgZmEHtdmPVw6bpbXubOFgU4j5yc4GcNnGpwkjwa7gv0Q0V3daPJeT1a6vYXR+A3Cwdlus5xAqe74nujeY8gANy9Zw7y4tHigNJcaTl+SgktNI2fzzupc+vVFuPJA6kU78p5oDtTZvOe/JC0AVDazjic7eaN+7zvPhw+qgMpNe7ON9/qgljarnP0Rrq7OtF/BQ5tesLRb0upc7vLC0XugiozT8OU/wBVJdRYb0rtRvyncgd3djeboIZM6+XG9/JSZm2z7RvsoRBL/wBzzi38VL4i2f6lEQGxF8/1CjD/AH/Kb88kRBAmb7PtG63opxJnVy+ahEEvj4M98Wt5qbR+97zzREGsdZuo+i9IguxmlmNuxmQHwMg60PFt4nwIXKumeyfTcGXYJw8dg3hwY+PEteaR5OKIg0zpDovF0cxisp4VNO8j4SfAr40RAREQEREBERAREQEREBe50P1R0zTI7jBqByNeGBF5N3A7ipRBv3V/seNQdp2MAP8A4sKST/qxHC2+wB5hdR6H6KwtEwxhYWG1mGBIaBmbazjckxvJJREH3GZts+0b7I/9zzi38VCILPiNXP8AUo2Ivn+oREEYf7/lN+eXkobM32faN1vREQMSZ1cvnvUvj4M98Wt5oiCbR+97zzUNA+PPdvt5IiD/2Q=="
        }
    ]

    const prev_jobs = [
        {
            id: 1,
            name: "Extreme Networks",
            img: "https://companieslogo.com/img/orig/EXTR-adff0e4b.png?t=1688818574",
            offers: 12
        },
        {
            id: 2,
            name: "Nextuple",
            img: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/445b15cf153a9638b4db",
            offers: 12
        },
        {
            id: 3,
            name: "Persistent Systems",
            img: "https://companieslogo.com/img/orig/PERSISTENT.NS-d1e466d3.png?t=1604067042",
            offers: 2
        },
        {
            id: 4,
            name: "Societe Generale",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAMAAADdXVr2AAAAOVBMVEUAAADtGjr////sACzzGzuaESbtEDXtADD0i5XsACjsACbyADH3iZTyACiWABbBh4yTAACAhYSFhYWwJJlUAAAA7UlEQVR4nO3PSU7DQAAAQRPssBOS/z8WcbWENAfQuKOqF3QvD3dtmR3wv+yV2SuzV2avzF6ZvTJ7ZfbK7JXZK7NXZq/MXpm9Mntl9srsldkrs1dmr8xemb0ye2X2yuyV2SuzV2avzF6ZvTJ7ZfbK7JXZK7NXZq/MXpm9Mntl9srsldkrs1dmr8xemb0ye2X2yuyV2SuzV2avzF6ZvR/nx4P5072n59PBvNz33uvg3jri7X32zt7HUPe6bCM+L7N39r6GurdlzHX2zt5g96Db7J09ewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwG++ASMAbFqyDCBTAAAAAElFTkSuQmCC",
            offers: 5
        },
        {
            id: 5,
            name: "Daimler",
            img: "https://companieslogo.com/img/orig/DAI.DE-34e92f6e.png?t=1597354531",
            offers: 30
        },
        {
            id: 6,
            name: "Mercedez Benz",
            img: "https://companieslogo.com/img/orig/DAI.DE-34e92f6e.png?t=1597354531",
            offers: 6
        },
        {
            id: 7,
            name: "Sony",
            img: "data:image/jpeg;base64,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",
            offers: 2
        }
    ]

    const render = ({ item }: any) => {
        return (
            <View style={{ margin: 8, marginStart: 20, marginEnd: 5 }}>
                <JobCard name={item.name} img={item.img} />
            </View>
        )
    }

    const renderPastJobs = ({ item }: any) => {
        return (
            <View style={{ margin: 8, marginStart: 20, marginEnd: 5 }}>
                <PastJobCard name={item.name} img={item.img} offers={item.offers.toString()} />
            </View>
        )
    }

    return (
        <ScrollView>

            <View style={{
                marginTop: 60,
            }}>
                <View style={{
                    backgroundColor:'white',
                    bottom:60,
                    flexDirection:'row'
                }}>
                    <Image
                        source={require('../../../assets/images/Hero.png')}
                        style={{
                            height: 250,
                            width: "96%",
                            marginTop:30,
                            alignSelf:'center',
                            marginLeft:18
                        }}
                    />
                </View>
                <View style={{
                    marginStart: 30,
                    marginBottom: 20
                }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Upcoming Drives</Text>
                </View>
                <FlatList
                    data={jobs}
                    renderItem={render}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={{
                marginTop: 60,
                marginBottom: 30,
                marginRight: 20
            }}>
                <View style={{
                    marginStart: 30,
                    marginBottom: 20
                }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Last Year Offers</Text>
                </View>
                <FlatList
                    data={prev_jobs}
                    renderItem={renderPastJobs}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({

})

export default PlacementPage;