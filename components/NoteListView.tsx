import { FlatList, ScrollView, StyleSheet, View } from "react-native"
import NoteListItem from "./ui/NoteListItem"

export default function NoteListView() {
    const data = [{
        "id": 1,
        "title": "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget",
        "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "location": "Dominican Republic",
        "isoCode": "DO",
        "date": "07/12/2021"
      }, {
        "id": 2,
        "title": "iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque",
        "content": "Nullam molestie nibh in lectus.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "02/16/2022"
      }, {
        "id": 3,
        "title": "at turpis a pede posuere nonummy integer non velit donec diam",
        "content": "Aliquam quis turpis eget elit sodales scelerisque.",
        "location": "United States",
        "isoCode": "US",
        "date": "06/22/2022"
      }, {
        "id": 4,
        "title": "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
        "content": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
        "location": "France",
        "isoCode": "FR",
        "date": "11/11/2021"
      }, {
        "id": 5,
        "title": "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
        "content": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
        "location": "Russia",
        "isoCode": "RU",
        "date": "10/11/2021"
      }, {
        "id": 6,
        "title": "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum",
        "content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
        "location": "China",
        "isoCode": "CN",
        "date": "08/14/2024"
      }, {
        "id": 7,
        "title": "congue eget semper rutrum nulla nunc purus phasellus in felis donec semper",
        "content": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "location": "Honduras",
        "isoCode": "HN",
        "date": "03/02/2023"
      }, {
        "id": 8,
        "title": "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida",
        "content": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
        "location": "Philippines",
        "isoCode": "PH",
        "date": "03/04/2022"
      }, {
        "id": 9,
        "title": "ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue",
        "content": "Morbi non lectus.",
        "location": "China",
        "isoCode": "CN",
        "date": "05/04/2022"
      }, {
        "id": 10,
        "title": "condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque",
        "content": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "location": "Mali",
        "isoCode": "ML",
        "date": "10/17/2023"
      }, {
        "id": 11,
        "title": "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
        "content": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
        "location": "Thailand",
        "isoCode": "TH",
        "date": "10/09/2023"
      }, {
        "id": 12,
        "title": "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis",
        "content": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "location": "Luxembourg",
        "isoCode": "LU",
        "date": "11/29/2023"
      }, {
        "id": 13,
        "title": "est congue elementum in hac habitasse platea dictumst morbi vestibulum",
        "content": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "location": "Belarus",
        "isoCode": "BY",
        "date": "05/03/2021"
      }, {
        "id": 14,
        "title": "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
        "content": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
        "location": "Argentina",
        "isoCode": "AR",
        "date": "11/23/2022"
      }, {
        "id": 15,
        "title": "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis",
        "content": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "location": "China",
        "isoCode": "CN",
        "date": "12/27/2020"
      }, {
        "id": 16,
        "title": "dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
        "content": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "11/20/2021"
      }, {
        "id": 17,
        "title": "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum",
        "content": "Nullam porttitor lacus at turpis.",
        "location": "Russia",
        "isoCode": "RU",
        "date": "04/16/2022"
      }, {
        "id": 18,
        "title": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum",
        "content": "Quisque ut erat. Curabitur gravida nisi at nibh.",
        "location": "Estonia",
        "isoCode": "EE",
        "date": "06/07/2020"
      }, {
        "id": 19,
        "title": "cum sociis natoque penatibus et magnis dis parturient montes nascetur",
        "content": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
        "location": "China",
        "isoCode": "CN",
        "date": "01/18/2021"
      }, {
        "id": 20,
        "title": "ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id",
        "content": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        "location": "Canada",
        "isoCode": "CA",
        "date": "05/23/2020"
      }, {
        "id": 21,
        "title": "justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
        "content": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
        "location": "China",
        "isoCode": "CN",
        "date": "09/22/2023"
      }, {
        "id": 22,
        "title": "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut",
        "content": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
        "location": "Russia",
        "isoCode": "RU",
        "date": "08/14/2024"
      }, {
        "id": 23,
        "title": "amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed",
        "content": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "location": "Sweden",
        "isoCode": "SE",
        "date": "12/04/2021"
      }, {
        "id": 24,
        "title": "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh",
        "content": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "07/14/2020"
      }, {
        "id": 25,
        "title": "euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin",
        "content": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "12/06/2021"
      }, {
        "id": 26,
        "title": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
        "content": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "06/12/2021"
      }, {
        "id": 27,
        "title": "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
        "content": "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
        "location": "Finland",
        "isoCode": "FI",
        "date": "08/04/2024"
      }, {
        "id": 28,
        "title": "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus",
        "content": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "location": "Brazil",
        "isoCode": "BR",
        "date": "06/10/2022"
      }, {
        "id": 29,
        "title": "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede",
        "content": "In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        "location": "Morocco",
        "isoCode": "MA",
        "date": "02/25/2024"
      }, {
        "id": 30,
        "title": "orci luctus et ultrices posuere cubilia curae mauris viverra diam",
        "content": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
        "location": "Brazil",
        "isoCode": "BR",
        "date": "01/12/2024"
      }, {
        "id": 31,
        "title": "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
        "content": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "location": "Portugal",
        "isoCode": "PT",
        "date": "11/02/2023"
      }, {
        "id": 32,
        "title": "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus",
        "content": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "location": "China",
        "isoCode": "CN",
        "date": "08/13/2022"
      }, {
        "id": 33,
        "title": "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis",
        "content": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "02/10/2021"
      }, {
        "id": 34,
        "title": "consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices",
        "content": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
        "location": "France",
        "isoCode": "FR",
        "date": "01/24/2022"
      }, {
        "id": 35,
        "title": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris",
        "content": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        "location": "Brazil",
        "isoCode": "BR",
        "date": "03/26/2023"
      }, {
        "id": 36,
        "title": "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed",
        "content": "Mauris lacinia sapien quis libero.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "08/10/2024"
      }, {
        "id": 37,
        "title": "in porttitor pede justo eu massa donec dapibus duis at velit eu est congue",
        "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "location": "China",
        "isoCode": "CN",
        "date": "10/16/2020"
      }, {
        "id": 38,
        "title": "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien",
        "content": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "08/09/2022"
      }, {
        "id": 39,
        "title": "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in",
        "content": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
        "location": "France",
        "isoCode": "FR",
        "date": "12/19/2023"
      }, {
        "id": 40,
        "title": "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam",
        "content": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "location": "Venezuela",
        "isoCode": "VE",
        "date": "07/24/2022"
      }, {
        "id": 41,
        "title": "odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla",
        "content": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
        "location": "Brazil",
        "isoCode": "BR",
        "date": "02/18/2022"
      }, {
        "id": 42,
        "title": "diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
        "content": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "06/17/2023"
      }, {
        "id": 43,
        "title": "posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor",
        "content": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
        "location": "Iceland",
        "isoCode": "IS",
        "date": "02/17/2021"
      }, {
        "id": 44,
        "title": "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est",
        "content": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "location": "Slovenia",
        "isoCode": "SI",
        "date": "08/15/2021"
      }, {
        "id": 45,
        "title": "congue elementum in hac habitasse platea dictumst morbi vestibulum velit",
        "content": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "location": "Brazil",
        "isoCode": "BR",
        "date": "07/21/2020"
      }, {
        "id": 46,
        "title": "iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus",
        "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "location": "China",
        "isoCode": "CN",
        "date": "12/31/2021"
      }, {
        "id": 47,
        "title": "vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed",
        "content": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
        "location": "United States",
        "isoCode": "US",
        "date": "12/18/2023"
      }, {
        "id": 48,
        "title": "sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis",
        "content": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
        "location": "Saint Vincent and the Grenadines",
        "isoCode": "VC",
        "date": "10/30/2022"
      }, {
        "id": 49,
        "title": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris",
        "content": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
        "location": "Brazil",
        "isoCode": "BR",
        "date": "12/18/2022"
      }, {
        "id": 50,
        "title": "blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
        "content": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        "location": "Ukraine",
        "isoCode": "UA",
        "date": "04/29/2024"
      }, {
        "id": 51,
        "title": "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
        "content": "Duis at velit eu est congue elementum.",
        "location": "Sweden",
        "isoCode": "SE",
        "date": "11/18/2023"
      }, {
        "id": 52,
        "title": "turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed",
        "content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "location": "Moldova",
        "isoCode": "MD",
        "date": "10/30/2023"
      }, {
        "id": 53,
        "title": "eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum",
        "content": "Vestibulum rutrum rutrum neque.",
        "location": "Norway",
        "isoCode": "NO",
        "date": "08/06/2023"
      }, {
        "id": 54,
        "title": "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac",
        "content": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
        "location": "Sweden",
        "isoCode": "SE",
        "date": "02/26/2021"
      }, {
        "id": 55,
        "title": "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "location": "China",
        "isoCode": "CN",
        "date": "09/16/2020"
      }, {
        "id": 56,
        "title": "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus",
        "content": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
        "location": "Senegal",
        "isoCode": "SN",
        "date": "01/23/2024"
      }, {
        "id": 57,
        "title": "orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices",
        "content": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
        "location": "France",
        "isoCode": "FR",
        "date": "12/30/2020"
      }, {
        "id": 58,
        "title": "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
        "content": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "location": "Mexico",
        "isoCode": "MX",
        "date": "04/10/2021"
      }, {
        "id": 59,
        "title": "sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed",
        "content": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "10/21/2021"
      }, {
        "id": 60,
        "title": "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
        "content": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "location": "China",
        "isoCode": "CN",
        "date": "06/20/2023"
      }, {
        "id": 61,
        "title": "a suscipit nulla elit ac nulla sed vel enim sit amet",
        "content": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "location": "Zimbabwe",
        "isoCode": "ZW",
        "date": "12/09/2020"
      }, {
        "id": 62,
        "title": "ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
        "content": "Ut at dolor quis odio consequat varius. Integer ac leo.",
        "location": "Honduras",
        "isoCode": "HN",
        "date": "03/03/2021"
      }, {
        "id": 63,
        "title": "ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
        "content": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "location": "China",
        "isoCode": "CN",
        "date": "02/08/2023"
      }, {
        "id": 64,
        "title": "sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem",
        "content": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
        "location": "United States",
        "isoCode": "US",
        "date": "11/30/2023"
      }, {
        "id": 65,
        "title": "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut",
        "content": "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "location": "Croatia",
        "isoCode": "HR",
        "date": "08/08/2021"
      }, {
        "id": 66,
        "title": "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
        "content": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        "location": "Sweden",
        "isoCode": "SE",
        "date": "10/26/2023"
      }, {
        "id": 67,
        "title": "nam nulla integer pede justo lacinia eget tincidunt eget tempus",
        "content": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
        "location": "United States",
        "isoCode": "US",
        "date": "11/05/2022"
      }, {
        "id": 68,
        "title": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis",
        "content": "Quisque porta volutpat erat.",
        "location": "Czech Republic",
        "isoCode": "CZ",
        "date": "09/10/2022"
      }, {
        "id": 69,
        "title": "nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
        "content": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "location": "Portugal",
        "isoCode": "PT",
        "date": "12/25/2021"
      }, {
        "id": 70,
        "title": "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
        "content": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "09/07/2021"
      }, {
        "id": 71,
        "title": "orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
        "content": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "09/01/2024"
      }, {
        "id": 72,
        "title": "feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
        "content": "Vivamus vel nulla eget eros elementum pellentesque.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "06/30/2020"
      }, {
        "id": 73,
        "title": "convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor",
        "content": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "12/27/2020"
      }, {
        "id": 74,
        "title": "ut mauris eget massa tempor convallis nulla neque libero convallis",
        "content": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
        "location": "Jordan",
        "isoCode": "JO",
        "date": "10/31/2022"
      }, {
        "id": 75,
        "title": "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
        "content": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "location": "Pakistan",
        "isoCode": "PK",
        "date": "07/10/2022"
      }, {
        "id": 76,
        "title": "dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam",
        "content": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
        "location": "Greece",
        "isoCode": "GR",
        "date": "11/16/2022"
      }, {
        "id": 77,
        "title": "eu mi nulla ac enim in tempor turpis nec euismod scelerisque",
        "content": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
        "location": "Russia",
        "isoCode": "RU",
        "date": "12/05/2020"
      }, {
        "id": 78,
        "title": "curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non",
        "content": "Sed ante.",
        "location": "Papua New Guinea",
        "isoCode": "PG",
        "date": "08/23/2023"
      }, {
        "id": 79,
        "title": "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
        "location": "South Africa",
        "isoCode": "ZA",
        "date": "07/21/2024"
      }, {
        "id": 80,
        "title": "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
        "content": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "location": "Colombia",
        "isoCode": "CO",
        "date": "06/02/2020"
      }, {
        "id": 81,
        "title": "dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia",
        "content": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
        "location": "Russia",
        "isoCode": "RU",
        "date": "02/11/2023"
      }, {
        "id": 82,
        "title": "platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec",
        "content": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "07/06/2022"
      }, {
        "id": 83,
        "title": "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
        "content": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
        "location": "China",
        "isoCode": "CN",
        "date": "09/16/2020"
      }, {
        "id": 84,
        "title": "nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit",
        "content": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "location": "France",
        "isoCode": "FR",
        "date": "04/05/2024"
      }, {
        "id": 85,
        "title": "id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl",
        "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
        "location": "Mexico",
        "isoCode": "MX",
        "date": "12/24/2023"
      }, {
        "id": 86,
        "title": "id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
        "content": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "location": "Bosnia and Herzegovina",
        "isoCode": "BA",
        "date": "09/12/2021"
      }, {
        "id": 87,
        "title": "interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
        "content": "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        "location": "Philippines",
        "isoCode": "PH",
        "date": "06/02/2022"
      }, {
        "id": 88,
        "title": "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum",
        "content": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
        "location": "Peru",
        "isoCode": "PE",
        "date": "09/27/2022"
      }, {
        "id": 89,
        "title": "in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit",
        "content": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "12/15/2022"
      }, {
        "id": 90,
        "title": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
        "content": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "location": "Poland",
        "isoCode": "PL",
        "date": "04/19/2022"
      }, {
        "id": 91,
        "title": "proin eu mi nulla ac enim in tempor turpis nec",
        "content": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "location": "Canada",
        "isoCode": "CA",
        "date": "05/09/2020"
      }, {
        "id": 92,
        "title": "nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
        "content": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
        "location": "Czech Republic",
        "isoCode": "CZ",
        "date": "06/09/2023"
      }, {
        "id": 93,
        "title": "nisl venenatis lacinia aenean sit amet justo morbi ut odio",
        "content": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "location": "Russia",
        "isoCode": "RU",
        "date": "05/22/2023"
      }, {
        "id": 94,
        "title": "justo eu massa donec dapibus duis at velit eu est",
        "content": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
        "location": "Democratic Republic of the Congo",
        "isoCode": "CD",
        "date": "09/03/2023"
      }, {
        "id": 95,
        "title": "rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
        "content": "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "location": "China",
        "isoCode": "CN",
        "date": "06/10/2024"
      }, {
        "id": 96,
        "title": "in lectus pellentesque at nulla suspendisse potenti cras in purus",
        "content": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "location": "Poland",
        "isoCode": "PL",
        "date": "09/14/2022"
      }, {
        "id": 97,
        "title": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique",
        "content": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        "location": "Portugal",
        "isoCode": "PT",
        "date": "05/07/2021"
      }, {
        "id": 98,
        "title": "sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus",
        "content": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
        "location": "Belarus",
        "isoCode": "BY",
        "date": "10/27/2022"
      }, {
        "id": 99,
        "title": "ante nulla justo aliquam quis turpis eget elit sodales scelerisque",
        "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "location": "China",
        "isoCode": "CN",
        "date": "10/10/2022"
      }, {
        "id": 100,
        "title": "elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
        "content": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        "location": "Indonesia",
        "isoCode": "ID",
        "date": "01/11/2021"
      }]

    function ListSeparator() {
        return <View style={styles.separator} />
    }

    return (
        <FlatList 
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer} 
            data={data} 
            renderItem={({item}) => <NoteListItem item={item} />}
        />
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        zIndex: 10,
        flex: 1,
        paddingHorizontal: 5
    },
    separator: {
        height: 10,
        width: '100%'
    }
})