import d from "@/components/@docs/d/d"

export default async function DocsPage() {
    return (
        <d.main
            title="คู่มือการเล่นเซิร์ฟเวอร์"
            desc="ยินดีต้อนรับสู่ เอกสารประกอบการเล่นเซิร์ฟเวอร์ We Are In Space [ภาษาทางการ]"
        >
            <d.h1 id="เอกสารฉบับนี้ครอบคลุมอะไรบ้าง">เอกสารฉบับนี้ครอบคลุมอะไรบ้าง</d.h1>
            <d.list>กฎต่างๆ</d.list>
            <d.list>วิธีการต่าง ๆ</d.list>
            <d.list>การใช้คำสั่ง</d.list>
            <d.list>การใช้ Bukkit API และ Prism API</d.list>

            <d.h1 id="we-are-in-space-คืออะไร">We Are In Space คืออะไร</d.h1>
            <d.p>We Are In Space คือเซิร์ฟเวอร์ Minecraft</d.p>

            <d.h1 id="ชื่อนี้ได้มาอย่างไร">ชื่อนี้ได้มาอย่างไร</d.h1>
            <d.p>คำนี้มีได้หลายความหมาย แรกเริ่มเดิมที ช่วงแรก ๆ ของการพัฒนาเซิร์ฟเวอร์ เราได้สร้างแมพเซิร์ฟเวอร์ขึ้นมาและพัฒนาระบบ และ สิ่งหนึ่งที่เพิ่มเข้ามาคือระบบที่จำลองสภาวะแรงโน้มถ่วงต่ำ ช่วงนั้นเรากำลังคิดชื่อเซิร์ฟเวอร์อยู่ และระบบตัวนี้ก็เป็นสาเหตุว่าทำไมถึงตั้งชื่อว่า <d.bold>We Are In Space</d.bold></d.p>
        </d.main>
    )
}