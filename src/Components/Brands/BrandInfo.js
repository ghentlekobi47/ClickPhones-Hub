import apple15 from './Images/iphone15.jpg'
import apple14 from './Images/iphone14.jpg'
import apple13 from './Images/iphone13.jpg'
import apple12 from './Images/iphone12.jpg'
import appleSE from './Images/iphoneSE.jpg'
import samsungS23 from './Images/Samsung Galaxy S23.jpg'
import samsungS22 from './Images/Samsung Galaxy S22.jpg'
import samsungA54 from './Images/Samsung Galaxy A54.jpg'
import samsungM34 from './Images/Samsung Galaxy m34.jpg'
import samsungF54 from './Images/Samsung Galaxy F54.jpg'
import redmiNote13 from './Images/Redmi note 13.jpg'
import redmiNote12 from './Images/Redmi note 12.jpg'
import redmi12 from './Images/Redmi 12.jpg'
import redmi11Prime from './Images/Redmi 11 prime.jpg'
import redmiK50 from './Images/Redmi k50.jpg'
import vivoV29 from './Images/vvivo V29.jpg'
import vivoV27 from './Images/vivo v27.jpg'
import vivoY100 from './Images/vivo y100.jpg'
import vivoY50 from './Images/vivo y50.jpg'
import vivoT1 from './Images/vivo t1.jpg'
import realmeGT5 from './Images/Readme GT5.jpg'
import realmeNarzo60 from './Images/Readme Narzo 60.jpg'
import realme11Pro from './Images/Readme 11 pro.jpg'
import realmeC55 from './Images/Readme c55.jpg'
import realmeGTNeo from './Images/Readme GT Neo.jpg'

const products = [
    // APPLE
    {
        id: 1,
        brand: "apple",
        name: "iPhone 15",
        description: "A16 Bionic chip with advanced dual camera system.",
        price: 79999,
        image: apple15,

        specs: {
            display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g"
        },

        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 2,
        brand: "apple",
        name: "iPhone 14",
        description: "Powerful performance with improved battery life.",
        price: 69999,
        image: apple14,

        specs: {
            display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 3,
        brand: "apple",
        name: "iPhone 13",
        description: "Super Retina display with powerful A15 chip.",
        price: 59999,
        image: apple13,

        specs: {
            display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 4,
        brand: "apple",
        name: "iPhone 12",
        description: "5G connectivity with ceramic shield protection.",
        price: 52999,
        image: apple12,

        specs: {
            display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 5,
        brand: "apple",
        name: "iPhone SE",
        description: "Compact design with powerful processor.",
        price: 1200,
        image: appleSE,

        specs: {
            display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },


    // SAMSUNG

    {
        id: 6,
        brand: "samsung",
        name: "Samsung Galaxy S23",
        description: "Flagship smartphone with AMOLED display.",
        price: 5800,
        image: samsungS23,

        specs: {
            display: "6.1 inch Dynamic AMOLED 120Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "8GB",
            storage: ["128GB", "256GB"],
            rearCamera: "50MP + 10MP + 12MP",
            frontCamera: "12MP",
            battery: "3900mAh",
            os: "Android 13",
            weight: "168g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 7,
        brand: "samsung",
        name: "Samsung Galaxy S22",
        description: "Premium performance with advanced camera.",
        price: 3500,
        image: samsungS22,

        specs: {
            display: "6.1 inch Dynamic AMOLED 120Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "8GB",
            storage: ["128GB", "256GB"],
            rearCamera: "50MP + 10MP + 12MP",
            frontCamera: "12MP",
            battery: "3900mAh",
            os: "Android 13",
            weight: "168g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 8,
        brand: "samsung",
        name: "Samsung Galaxy A54",
        description: "Mid-range smartphone with smooth performance.",
        price: 4600,
        image: samsungA54,

        specs: {
            display: "6.1 inch Dynamic AMOLED 120Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "8GB",
            storage: ["128GB", "256GB"],
            rearCamera: "50MP + 10MP + 12MP",
            frontCamera: "12MP",
            battery: "3900mAh",
            os: "Android 13",
            weight: "168g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 9,
        brand: "samsung",
        name: "Samsung Galaxy M34",
        description: "Massive battery and smooth display.",
        price: 3200,
        image: samsungM34,


        specs: {
            display: "6.1 inch Dynamic AMOLED 120Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "8GB",
            storage: ["128GB", "256GB"],
            rearCamera: "50MP + 10MP + 12MP",
            frontCamera: "12MP",
            battery: "3900mAh",
            os: "Android 13",
            weight: "168g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 10,
        brand: "samsung",
        name: "Samsung Galaxy F54",
        description: "108MP camera with long battery life.",
        price: 4899,
        image: samsungF54,


        specs: {
            display: "6.1 inch Dynamic AMOLED 120Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "8GB",
            storage: ["128GB", "256GB"],
            rearCamera: "50MP + 10MP + 12MP",
            frontCamera: "12MP",
            battery: "3900mAh",
            os: "Android 13",
            weight: "168g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },

    // REDMI
    {
        id: 11,
        brand: "redmi",
        name: "Redmi Note 13",
        description: "120Hz display with powerful processor.",
        price: 19999,
        image: redmiNote13,

        specs: {
            display: "6.67 inch AMOLED 120Hz",
            chipset: "Snapdragon 685",
            ram: "6GB",
            storage: ["128GB", "256GB"],
            rearCamera: "108MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5000mAh",
            os: "Android 13",
            weight: "188g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 12,
        brand: "redmi",
        name: "Redmi Note 12",
        description: "Smooth performance with long battery backup.",
        price: 17999,
        image: redmiNote12,

        specs: {
            display: "6.67 inch AMOLED 120Hz",
            chipset: "Snapdragon 685",
            ram: "6GB",
            storage: ["128GB", "256GB"],
            rearCamera: "108MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5000mAh",
            os: "Android 13",
            weight: "188g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 13,
        brand: "redmi",
        name: "Redmi 12",
        description: "Affordable smartphone with stylish design.",
        price: 12999,
        image: redmi12,


        specs: {
            display: "6.67 inch AMOLED 120Hz",
            chipset: "Snapdragon 685",
            ram: "6GB",
            storage: ["128GB", "256GB"],
            rearCamera: "108MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5000mAh",
            os: "Android 13",
            weight: "188g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 14,
        brand: "redmi",
        name: "Redmi 11 Prime",
        description: "Budget phone with strong battery.",
        price: 11999,
        image: redmi11Prime,


        specs: {
            display: "6.67 inch AMOLED 120Hz",
            chipset: "Snapdragon 685",
            ram: "6GB",
            storage: ["128GB", "256GB"],
            rearCamera: "108MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5000mAh",
            os: "Android 13",
            weight: "188g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 15,
        brand: "redmi",
        name: "Redmi K50",
        description: "Gaming smartphone with powerful chipset.",
        price: 29999,
        image: redmiK50,


        specs: {
            display: "6.67 inch AMOLED 120Hz",
            chipset: "Snapdragon 685",
            ram: "6GB",
            storage: ["128GB", "256GB"],
            rearCamera: "108MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5000mAh",
            os: "Android 13",
            weight: "188g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },


    // VIVO

    {
        id: 16,
        brand: "vivo",
        name: "Vivo V29",
        description: "Premium design with powerful camera.",
        price: 28999,
        image: vivoV29,

        specs: {
            display: "6.78 inch AMOLED 120Hz",
            chipset: "Snapdragon 778G",
            ram: "8GB",
            storage: ["128GB", "256GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "50MP",
            battery: "4600mAh",
            os: "Android 13",
            weight: "186g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 17,
        brand: "vivo",
        name: "Vivo V27",
        description: "Slim design with excellent portrait camera.",
        price: 27999,
        image: vivoV27,


        specs: {
            display: "6.78 inch AMOLED 120Hz",
            chipset: "Snapdragon 778G",
            ram: "8GB",
            storage: ["128GB", "256GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "50MP",
            battery: "4600mAh",
            os: "Android 13",
            weight: "186g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 18,
        brand: "vivo",
        name: "Vivo Y100",
        description: "AMOLED display with stylish design.",
        price: 23999,
        image: vivoY100,

        specs: {
            display: "6.78 inch AMOLED 120Hz",
            chipset: "Snapdragon 778G",
            ram: "8GB",
            storage: ["128GB", "256GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "50MP",
            battery: "4600mAh",
            os: "Android 13",
            weight: "186g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 19,
        brand: "vivo",
        name: "Vivo Y56",
        description: "Long battery life with smooth performance.",
        price: 17999,
        image: vivoY50,


        specs: {
            display: "6.78 inch AMOLED 120Hz",
            chipset: "Snapdragon 778G",
            ram: "8GB",
            storage: ["128GB", "256GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "50MP",
            battery: "4600mAh",
            os: "Android 13",
            weight: "186g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },
    {
        id: 20,
        brand: "vivo",
        name: "Vivo T1",
        description: "Gaming-friendly smartphone.",
        price: 19999,
        image: vivoT1,

        specs: {
            display: "6.78 inch AMOLED 120Hz",
            chipset: "Snapdragon 778G",
            ram: "8GB",
            storage: ["128GB", "256GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "50MP",
            battery: "4600mAh",
            os: "Android 13",
            weight: "186g"
        },
        descriptions: {

             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }
    },


    // REALME

    {
        id: 21,
        brand: "realme",
        name: "Realme GT 5",
        description: "High-performance smartphone for gaming.",
        price: 32999,
        image: realmeGT5,

        specs: {
            display: "6.74 inch AMOLED 144Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: ["256GB", "512GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5240mAh",
            os: "Android 13",
            weight: "205g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }

    },
    {
        id: 22,
        brand: "realme",
        name: "Realme Narzo 60",
        description: "Budget gaming phone with smooth display.",
        price: 16999,
        image: realmeNarzo60,

        specs: {
            display: "6.74 inch AMOLED 144Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: ["256GB", "512GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5240mAh",
            os: "Android 13",
            weight: "205g"
        },
        descriptions: {

             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }

    },
    {
        id: 23,
        brand: "realme",
        name: "Realme 11 Pro",
        description: "Premium design with powerful camera.",
        price: 25999,
        image: realme11Pro,

        specs: {
            display: "6.74 inch AMOLED 144Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: ["256GB", "512GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5240mAh",
            os: "Android 13",
            weight: "205g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }

    },
    {
        id: 24,
        brand: "realme",
        name: "Realme C55",
        description: "Affordable smartphone with stylish design.",
        price: 11999,
        image: realmeC55,

        specs: {
            display: "6.74 inch AMOLED 144Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: ["256GB", "512GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5240mAh",
            os: "Android 13",
            weight: "205g"
        },
        descriptions: {
            
            display: "6.74 inch AMOLED 144Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: ["256GB", "512GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5240mAh",
            os: "Android 13",
            weight: "205g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }

    },
    {
        id: 25,
        brand: "realme",
        name: "Realme GT Neo",
        description: "Fast performance with AMOLED display.",
        price: 27999,
        image: realmeGTNeo,

        specs: {
            display: "6.74 inch AMOLED 144Hz",
            chipset: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: ["256GB", "512GB"],
            rearCamera: "50MP + 8MP + 2MP",
            frontCamera: "16MP",
            battery: "5240mAh",
            os: "Android 13",
            weight: "205g"
        },
        descriptions: {
             display: "6.1 inch Super Retina XDR OLED",
            chipset: "Apple A16 Bionic",
            ram: "6GB",
            storage: ["128GB", "256GB", "512GB"],
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349mAh",
            os: "iOS 17",
            weight: "171g",
            bluetooth: "Bluetooth 6.0",
            usb: "USB Type-C 3.1 Gen2, OTG",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
            nfc: "Yes",
            sensor: "Fingerprint (under display), accelerometer, gyro, proximity, compass",
            batteryCapacity: "5200mAh with 90W Fast Charging",
            waterProtection: "IP68 Water Resistant",
            dimension: "162.1 x 76.4 x 6.99 mm",
            colour: "Carbon Black | Olive Green",
            inTheBox: "Mobile Phone | USB Type-C Cable | SIM Tool | Charger | User Manual"
        }

    }

];


export default products;
