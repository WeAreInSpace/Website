import d from "@/components/@docs/d/d"

export default async function DocsWelcome() {
    return (
        <d.main
            title="วิธีเชื่อมต่อเซิร์ฟเวอร์"
            desc="วิธีการเชื่อมต่อไปยังเซิร์ฟเวอร์ We Are In Space"
            pageForm="Getting Started"
        >
            <d.code runIn="Server Address" code="weareinspace.net" />
            <d.p>Minecraft เวอร์ชันอื่น ๆ เช่น Windows 10, Pocket Edition หรือเวอร์ชันคอนโซลจะไม่สามารถใช้งานได้ ตัวเกมที่ละเมิดลิขสิทธิ์จะถูกบล็อก</d.p>
            
            <d.h1 id="ไปที่เมนูผู้เล่นหลายคน">ไปที่เมนูผู้เล่นหลายคน</d.h1>
            <d.p>คลิกผู้เล่นหลายคนบนเมนูหลัก</d.p>
            <d.image src="/Docs/connect/1.webp" />

            <d.h1 id="เพิ่มเซิร์ฟเวอร์">เพิ่มเซิร์ฟเวอร์</d.h1>
            <d.p>คลิกปุ่มเพิ่มเซิร์ฟเวอร์ที่ด้านล่างขวาของเมนู</d.p>
            <d.image src="/Docs/connect/2.webp" />

            <d.h1 id="ป้อนที่อยู่เซิร์ฟเวอร์">ป้อนที่อยู่เซิร์ฟเวอร์</d.h1>
            <d.p>พิมพ์ชื่อที่คุณต้องการตั้งลงในช่อง Server Name และ ป้อนที่อยู่ของเซิร์ฟเวอร์ไปที่ช่อง Server Address จากนั้นคลิกปุ่ม Done</d.p>
            <d.image src="/Docs/connect/3.webp" />

            <d.h1 id="เชื่อมต่อ">เชื่อมต่อ</d.h1>
            <d.p>คลิกที่เซิร์ฟเวอร์ในรายการเซิร์ฟเวอร์ จากนั้น คลิกปุ่ม Join Server</d.p>
            <d.image src="/Docs/connect/4.webp" />
        </d.main>
    )
}
