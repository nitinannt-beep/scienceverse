const planets=[
 {id:'gas',name:'GASVERSE',emoji:'🧪',topic:'กฎของแก๊ส',desc:'บอยล์ ชาร์ล อาโวกาโดร กฎแก๊สรวม และ PV=nRT'},
 {id:'electro',name:'ELECTROVERSE',emoji:'⚡',topic:'ไฟฟ้า',desc:'วงจร กระแส ความต่างศักย์ ความต้านทาน และกำลังไฟฟ้า'},
 {id:'cell',name:'CELLVERSE',emoji:'🧬',topic:'เซลล์',desc:'ออร์แกเนลล์ การลำเลียงสาร การหายใจระดับเซลล์ และสังเคราะห์ด้วยแสง'},
 {id:'eco',name:'ECOVERSE',emoji:'🌍',topic:'ระบบนิเวศ',desc:'สายใยอาหาร ประชากร พลังงาน และสมดุลธรรมชาติ'},
 {id:'geo',name:'GEOVERSE',emoji:'🌋',topic:'โลกและธรณี',desc:'หิน แผ่นเปลือกโลก ภูเขาไฟ แผ่นดินไหว และทรัพยากรธรณี'},
 {id:'space',name:'SPACEVERSE',emoji:'🪐',topic:'ดาราศาสตร์',desc:'ระบบสุริยะ ดาวฤกษ์ กาแล็กซี ฤดูกาล และจักรวาล'},
 {id:'force',name:'FORCEVERSE',emoji:'🧲',topic:'แรงและการเคลื่อนที่',desc:'แรง มวล ความเร่ง งาน พลังงาน และโมเมนตัม'},
 {id:'chemi',name:'CHEMIVERSE',emoji:'🧫',topic:'สารและปฏิกิริยา',desc:'อะตอม โมเลกุล สมการเคมี สารละลาย และปฏิกิริยา'}
];
const qbank={
 gas:[
  ['Boyle City','ถ้าอุณหภูมิคงที่ ความดันเพิ่มขึ้น 2 เท่า ปริมาตรจะเป็นอย่างไร?',['เพิ่มขึ้น 2 เท่า','ลดลงครึ่งหนึ่ง','คงที่','เพิ่มขึ้น 4 เท่า'],1,'กฎของบอยล์: P แปรผกผันกับ V เมื่อ T คงที่ ดังนั้น P เพิ่ม 2 เท่า V ลดครึ่งหนึ่ง'],
  ['Boyle City','แก๊สมี P₁=2 atm, V₁=6 L ถ้า P₂=3 atm และ T คงที่ V₂ เท่าไร?',['2 L','4 L','6 L','9 L'],1,'ใช้ P₁V₁=P₂V₂ → 2×6=3×V₂ ดังนั้น V₂=4 L'],
  ['Boyle City','ถ้าปริมาตรของแก๊สลดลงขณะอุณหภูมิคงที่ ความดันจะเป็นอย่างไร?',['ลดลง','เพิ่มขึ้น','คงที่','เป็นศูนย์'],1,'เมื่อ V ลดลง โมเลกุลชนผนังบ่อยขึ้น ความดันจึงเพิ่ม'],
  ['Charles Town','เมื่อความดันคงที่ ถ้าอุณหภูมิของแก๊สเพิ่มขึ้น ปริมาตรจะเป็นอย่างไร?',['ลดลง','เพิ่มขึ้น','ไม่เปลี่ยน','กลายเป็นของเหลว'],1,'กฎของชาร์ล: V แปรผันตรงกับ T หน่วยเคลวิน'],
  ['Charles Town','แก๊ส V₁=2 L ที่ 300 K ถ้าเพิ่มอุณหภูมิเป็น 600 K โดย P คงที่ V₂ เท่าไร?',['1 L','2 L','4 L','8 L'],2,'ใช้ V₁/T₁=V₂/T₂ → 2/300=V₂/600 ดังนั้น V₂=4 L'],
  ['Charles Town','ในการใช้กฎของชาร์ล อุณหภูมิต้องอยู่ในหน่วยใด?',['องศาเซลเซียส','เคลวิน','ฟาเรนไฮต์','จูล'],1,'กฎแก๊สต้องใช้อุณหภูมิสัมบูรณ์ คือเคลวิน'],
  ['Avogadro Port','เมื่อ T และ P คงที่ ปริมาตรของแก๊สแปรผันตรงกับอะไร?',['จำนวนโมล','มวลโมเลกุล','สีของแก๊ส','ความหนาแน่นของภาชนะ'],0,'กฎของอาโวกาโดร: V ∝ n เมื่อ T และ P คงที่'],
  ['Avogadro Port','ถ้าเพิ่มจำนวนโมลของแก๊สเป็น 2 เท่า โดย P,T คงที่ ปริมาตรจะเป็นอย่างไร?',['ลดครึ่งหนึ่ง','เพิ่ม 2 เท่า','คงที่','เพิ่ม 4 เท่า'],1,'V ∝ n ดังนั้น n เพิ่ม 2 เท่า V ก็เพิ่ม 2 เท่า'],
  ['Ideal Gas Castle','สมการแก๊สอุดมคติคือข้อใด?',['P+V=nRT','PV=nRT','P/V=nRT','PT=nRV'],1,'สมการแก๊สอุดมคติคือ PV=nRT'],
  ['Ideal Gas Castle','ในสมการ PV=nRT ตัว n หมายถึงอะไร?',['จำนวนโมล','ความดัน','ปริมาตร','อุณหภูมิ'],0,'n คือจำนวนโมลของแก๊ส'],
  ['Ideal Gas Castle','ค่า R ใน PV=nRT เรียกว่าอะไร?',['ค่าคงที่แก๊ส','รัศมีภาชนะ','แรงเสียดทาน','ความเร็วแก๊ส'],0,'R คือค่าคงที่แก๊ส'],
  ['Boss Pressure Monster','ถ้า P,V,n,T ต้องสัมพันธ์พร้อมกัน ควรใช้สมการใดมากที่สุด?',['F=ma','PV=nRT','V=IR','E=mc²'],1,'PV=nRT เชื่อมความดัน ปริมาตร จำนวนโมล และอุณหภูมิ'],
  ['Boss Pressure Monster','แก๊ส 1 mol ที่ 273 K และ 1 atm มีปริมาตรประมาณเท่าไร?',['2.24 L','22.4 L','224 L','0.224 L'],1,'ที่ STP แก๊ส 1 mol มีปริมาตรประมาณ 22.4 L'],
  ['Boss Pressure Monster','กฎแก๊สรวมใช้เมื่อปริมาณใดคงที่?',['จำนวนโมล','ปริมาตร','ความดัน','อุณหภูมิ'],0,'กฎแก๊สรวมใช้กับ P,V,T เมื่อจำนวนโมลคงที่'],
  ['Boss Pressure Monster','ถ้า T เพิ่มขึ้นในภาชนะปิดที่ V คงที่ ความดันจะเป็นอย่างไร?',['ลดลง','เพิ่มขึ้น','คงที่','หายไป'],1,'เมื่อ V คงที่ P แปรผันตรงกับ T'],
  ['Boss Pressure Monster','แก๊สจริงจะใกล้เคียงแก๊สอุดมคติที่สุดเมื่อใด?',['ความดันต่ำ อุณหภูมิสูง','ความดันสูง อุณหภูมิต่ำ','ปริมาตรเล็กมาก','อุณหภูมิต่ำมาก'],0,'แก๊สจริงใกล้เคียงอุดมคติเมื่อแรงยึดเหนี่ยวน้อย คือ P ต่ำ T สูง']
 ],
 electro:[
  ['Circuit Gate','สูตรกฎของโอห์มคือข้อใด?',['V=IR','P=mv','F=ma','Q=mcΔT'],0,'กฎของโอห์มคือ V=IR'],
  ['Circuit Gate','ถ้า V=12 V และ R=4 Ω กระแสไฟฟ้าเท่าไร?',['2 A','3 A','4 A','48 A'],1,'I=V/R=12/4=3 A'],
  ['Circuit Gate','ตัวต้านทานต่ออนุกรมมีความต้านทานรวมเป็นอย่างไร?',['บวกกัน','หารกัน','เท่าตัวที่น้อยสุด','เป็นศูนย์'],0,'ต่ออนุกรม R รวม = R₁+R₂+...'],
  ['Power Station','สูตรกำลังไฟฟ้าที่ใช้บ่อยคือข้อใด?',['P=VI','P=ma','P=nRT','P=Q/t²'],0,'กำลังไฟฟ้า P=VI'],
  ['Power Station','เครื่องใช้ไฟฟ้า 220 V มีกระแส 2 A กำลังไฟฟ้าเท่าไร?',['110 W','222 W','440 W','880 W'],2,'P=VI=220×2=440 W'],
  ['Power Station','หน่วยของพลังงานไฟฟ้าที่บ้านใช้คิดค่าไฟคืออะไร?',['นิวตัน','กิโลวัตต์-ชั่วโมง','พาสคัล','โมล'],1,'ค่าไฟมักคิดจากพลังงานไฟฟ้า kWh'],
  ['Battery Lab','กระแสไฟฟ้าในวงจรหมายถึงอะไร?',['อัตราการไหลของประจุ','แรงดึงดูดโลก','สีของลวด','อุณหภูมิแบตเตอรี่'],0,'กระแสคืออัตราการไหลของประจุไฟฟ้า'],
  ['Battery Lab','ความต่างศักย์ไฟฟ้าวัดด้วยหน่วยใด?',['แอมแปร์','โวลต์','โอห์ม','วัตต์'],1,'ความต่างศักย์มีหน่วยเป็นโวลต์'],
  ['Boss Volt Dragon','ถ้าความต้านทานเพิ่ม แต่ V คงที่ กระแสจะเป็นอย่างไร?',['เพิ่ม','ลด','คงที่','เป็นศูนย์เสมอ'],1,'I=V/R ดังนั้น R เพิ่ม I ลด'],
  ['Boss Volt Dragon','อุปกรณ์ใดใช้วัดกระแสไฟฟ้า?',['โวลต์มิเตอร์','แอมมิเตอร์','บารอมิเตอร์','เทอร์มอมิเตอร์'],1,'แอมมิเตอร์ใช้วัดกระแสไฟฟ้า']
 ],
 cell:[
  ['Cell Core','ออร์แกเนลล์ใดควบคุมกิจกรรมของเซลล์?',['ไรโบโซม','นิวเคลียส','ไมโทคอนเดรีย','แวคิวโอล'],1,'นิวเคลียสควบคุมการทำงานและเก็บ DNA'],
  ['Energy Room','ไมโทคอนเดรียเกี่ยวข้องกับอะไร?',['สร้างพลังงาน','สังเคราะห์โปรตีน','เก็บน้ำเท่านั้น','สร้างผนังเซลล์'],0,'ไมโทคอนเดรียสร้าง ATP จากการหายใจระดับเซลล์'],
  ['Green Lab','คลอโรพลาสต์พบมากในเซลล์ใด?',['เซลล์พืช','เซลล์สัตว์','เม็ดเลือดแดงมนุษย์','ไวรัส'],0,'คลอโรพลาสต์พบในพืช ใช้สังเคราะห์ด้วยแสง'],
  ['Membrane Gate','เยื่อหุ้มเซลล์มีหน้าที่หลักคืออะไร?',['ควบคุมสารเข้าออก','สร้างแสง','ย่อยอาหารทั้งหมด','เป็นกระดูกของเซลล์'],0,'เยื่อหุ้มเซลล์ควบคุมการผ่านเข้าออกของสาร'],
  ['Ribosome Factory','ไรโบโซมทำหน้าที่อะไร?',['สังเคราะห์โปรตีน','สร้างไขมันเท่านั้น','เก็บ DNA','สร้างคลอโรฟิลล์'],0,'ไรโบโซมเป็นแหล่งสังเคราะห์โปรตีน'],
  ['Osmosis River','ออสโมซิสคือการเคลื่อนที่ของอะไร?',['น้ำผ่านเยื่อเลือกผ่าน','โปรตีนผ่านผนังเซลล์','แสงผ่านคลอโรพลาสต์','แก๊สผ่านนิวเคลียส'],0,'ออสโมซิสคือการเคลื่อนที่ของน้ำผ่านเยื่อเลือกผ่าน'],
  ['Diffusion Tunnel','การแพร่เกิดจากสารเคลื่อนที่จากบริเวณใดไปใด?',['เข้มข้นสูงไปต่ำ','ต่ำไปสูงเสมอ','ไม่มีทิศทาง','ต้องใช้ ATP เสมอ'],0,'การแพร่เคลื่อนจากเข้มข้นสูงไปต่ำ'],
  ['Cell Wall','ผนังเซลล์พืชช่วยเรื่องใดมากที่สุด?',['คงรูปร่างและป้องกัน','สร้าง ATP','ควบคุม DNA','ทำให้เคลื่อนที่เร็ว'],0,'ผนังเซลล์ช่วยให้เซลล์พืชแข็งแรงและคงรูป'],
  ['Boss Organelle','ข้อใดเป็นความแตกต่างเด่นของเซลล์พืชกับสัตว์?',['พืชมีคลอโรพลาสต์และผนังเซลล์','สัตว์มีผนังเซลล์','พืชไม่มีนิวเคลียส','สัตว์มีคลอโรพลาสต์'],0,'เซลล์พืชมีผนังเซลล์และคลอโรพลาสต์'],
  ['Boss Organelle','ATP เปรียบเหมือนอะไรของเซลล์?',['เงินพลังงาน','ผนังบ้าน','รหัสพันธุกรรม','สีผิวเซลล์'],0,'ATP คือโมเลกุลพลังงานของเซลล์']
 ],
 eco:[
  ['Food Web Rescue','ผู้ผลิตในระบบนิเวศมักหมายถึงสิ่งมีชีวิตกลุ่มใด?',['เสือ','เห็ดรา','พืชสีเขียว','แบคทีเรียย่อยสลาย'],2,'พืชสีเขียวสร้างอาหารเองได้ด้วยการสังเคราะห์ด้วยแสง'],
  ['Food Chain','ห่วงโซ่อาหารเริ่มจากสิ่งใดโดยทั่วไป?',['ผู้ผลิต','ผู้บริโภคลำดับสุดท้าย','ผู้ย่อยสลาย','ผู้ล่า'],0,'พลังงานเริ่มจากผู้ผลิต'],
  ['Energy Pyramid','พลังงานส่งต่อไปยังลำดับถัดไปประมาณกี่เปอร์เซ็นต์?',['1%','10%','50%','100%'],1,'โดยทั่วไปพลังงานถ่ายทอดไปลำดับถัดไปประมาณ 10%'],
  ['Decomposer Cave','ผู้ย่อยสลายมีบทบาทอะไร?',['หมุนเวียนสารอาหาร','ผลิตแสง','ทำให้โลกหยุดหมุน','เพิ่มความดันอากาศ'],0,'ผู้ย่อยสลายคืนสารอาหารสู่ระบบนิเวศ'],
  ['Population Field','ประชากรหมายถึงอะไร?',['สิ่งมีชีวิตชนิดเดียวกันในพื้นที่เดียวกัน','สิ่งไม่มีชีวิตทั้งหมด','อาหารทุกชนิด','ภูเขาและแม่น้ำ'],0,'ประชากรคือสิ่งมีชีวิตชนิดเดียวกันในพื้นที่และเวลาหนึ่ง'],
  ['Habitat Home','แหล่งที่อยู่อาศัยเรียกว่าอะไร?',['Habitat','Niche','Biome','Producer'],0,'Habitat คือที่อยู่อาศัยของสิ่งมีชีวิต'],
  ['Balance Forest','ถ้าผู้ล่าลดลงมาก เหยื่ออาจเป็นอย่างไร?',['เพิ่มจำนวน','สูญพันธุ์ทันทีทุกชนิด','กลายเป็นพืช','ไม่เปลี่ยนแน่นอน'],0,'ผู้ล่าลดลงทำให้เหยื่อบางชนิดเพิ่มจำนวนได้'],
  ['Carbon Quest','พืชดูดซับแก๊สใดในการสังเคราะห์ด้วยแสง?',['O₂','CO₂','N₂','He'],1,'พืชใช้คาร์บอนไดออกไซด์ในการสังเคราะห์ด้วยแสง'],
  ['Boss Eco Guard','ความหลากหลายทางชีวภาพสูงช่วยให้ระบบนิเวศเป็นอย่างไร?',['เสถียรมากขึ้น','พังง่ายขึ้นเสมอ','ไม่มีผู้ผลิต','ไม่มีพลังงาน'],0,'ความหลากหลายสูงช่วยเพิ่มความยืดหยุ่นของระบบนิเวศ'],
  ['Boss Eco Guard','สิ่งใดเป็นปัจจัยไม่มีชีวิตในระบบนิเวศ?',['แสงแดด','ต้นไม้','กระต่าย','เห็ด'],0,'แสงแดด น้ำ ดิน อุณหภูมิ เป็นปัจจัยไม่มีชีวิต']
 ],
 geo:[
  ['Rock Lab','หินอัคนีเกิดจากอะไร?',['ตะกอนทับถม','แมกมา/ลาวาเย็นตัว','ซากพืชสัตว์','น้ำทะเลระเหย'],1,'หินอัคนีเกิดจากแมกมาหรือลาวาเย็นตัว'],
  ['Rock Lab','หินตะกอนมักเกิดจากกระบวนการใด?',['การทับถมของตะกอน','ลาวาเย็นตัวเท่านั้น','โลหะหลอมเหลว','แสงอาทิตย์'],0,'หินตะกอนเกิดจากตะกอนทับถม อัดแน่น และเชื่อมประสาน'],
  ['Plate City','แผ่นเปลือกโลกเคลื่อนที่เพราะกระบวนการใดในแมนเทิล?',['กระแสพาความร้อน','การหายใจ','การสังเคราะห์ด้วยแสง','ไฟฟ้าสถิต'],0,'กระแสพาความร้อนในแมนเทิลช่วยขับเคลื่อนแผ่นเปลือกโลก'],
  ['Earthquake Alert','แผ่นดินไหวมักเกิดบริเวณใดบ่อย?',['รอยต่อแผ่นเปลือกโลก','กลางมหาสมุทรทุกจุด','ยอดต้นไม้','ชั้นบรรยากาศ'],0,'รอยต่อแผ่นเปลือกโลกเป็นบริเวณเกิดแผ่นดินไหวบ่อย'],
  ['Volcano Signal','ภูเขาไฟเกี่ยวข้องกับสิ่งใดมากที่สุด?',['แมกมา','น้ำค้าง','โอโซน','ดาวหาง'],0,'ภูเขาไฟเกิดจากแมกมาดันขึ้นสู่ผิวโลก'],
  ['Fossil Mine','ซากดึกดำบรรพ์มักพบในหินชนิดใด?',['หินตะกอน','หินอัคนีลึก','หินแกรนิตเสมอ','แก้วภูเขาไฟเท่านั้น'],0,'ฟอสซิลมักพบในหินตะกอน'],
  ['Soil Station','ดินเกิดจากอะไรเป็นหลัก?',['หินผุพังผสมอินทรียวัตถุ','พลาสติกละลาย','แก๊สแข็งตัว','แสงกลายเป็นผง'],0,'ดินเกิดจากหินผุพังและอินทรียวัตถุ'],
  ['Water Cycle','ขั้นตอนที่น้ำกลายเป็นไอน้ำเรียกว่าอะไร?',['การระเหย','การควบแน่น','การตกตะกอน','การแข็งตัว'],0,'การระเหยคือน้ำเปลี่ยนเป็นไอน้ำ'],
  ['Boss Geo Titan','ภูเขาหิมาลัยเกิดจากแผ่นเปลือกโลกแบบใด?',['ชนกัน','แยกออก','เลื่อนผ่านแนวราบเท่านั้น','ไม่มีการเคลื่อนที่'],0,'ภูเขาหิมาลัยเกิดจากแผ่นทวีปชนกัน'],
  ['Boss Geo Titan','คลื่นสึนามิมักเกิดจากอะไรใต้ทะเล?',['แผ่นดินไหวใต้ทะเล','ฝนตกเบา ๆ','หมอกลง','กลางวันยาวขึ้น'],0,'สึนามิมักเกิดจากแผ่นดินไหวใต้ทะเลหรือการรบกวนมวลน้ำขนาดใหญ่']
 ],
 space:[
  ['Orbit Path','ดาวเคราะห์โคจรรอบสิ่งใดในระบบสุริยะ?',['ดวงจันทร์','โลก','ดวงอาทิตย์','ดาวหาง'],2,'ดาวเคราะห์ในระบบสุริยะโคจรรอบดวงอาทิตย์'],
  ['Moon Phase','ข้างขึ้นข้างแรมเกิดจากอะไร?',['ตำแหน่งดวงจันทร์ โลก ดวงอาทิตย์','เมฆบังทุกคืน','ดวงจันทร์เปลี่ยนขนาดจริง','โลกหยุดหมุน'],0,'เกิดจากมุมที่เราเห็นส่วนสว่างของดวงจันทร์ต่างกัน'],
  ['Season Gate','ฤดูกาลบนโลกเกิดจากอะไรเป็นหลัก?',['แกนโลกเอียงและโลกโคจรรอบดวงอาทิตย์','โลกเข้าใกล้ดวงอาทิตย์อย่างเดียว','ดวงจันทร์เปลี่ยนสี','ดาวหางผ่าน'],0,'แกนโลกเอียงทำให้แต่ละซีกโลกได้รับแสงต่างกันตามช่วงปี'],
  ['Star Forge','ดาวฤกษ์สร้างพลังงานจากกระบวนการใด?',['นิวเคลียร์ฟิวชัน','การเผาไม้','การละลายเกลือ','การระเหยน้ำ'],0,'ดาวฤกษ์สร้างพลังงานจากนิวเคลียร์ฟิวชัน'],
  ['Galaxy Map','กาแล็กซีคืออะไร?',['กลุ่มดาวฤกษ์ แก๊ส ฝุ่น และสสารจำนวนมาก','ดาวเคราะห์ดวงเดียว','เมฆฝน','หินบนโลก'],0,'กาแล็กซีประกอบด้วยดาวฤกษ์ แก๊ส ฝุ่น และสสารจำนวนมาก'],
  ['Solar System','ดาวเคราะห์ดวงใดใกล้ดวงอาทิตย์ที่สุด?',['พุธ','ศุกร์','โลก','อังคาร'],0,'ดาวพุธอยู่ใกล้ดวงอาทิตย์ที่สุด'],
  ['Gravity Well','แรงที่ทำให้ดาวเคราะห์โคจรคืออะไร?',['แรงโน้มถ่วง','แรงเสียดทานอากาศ','แรงลอยตัว','แรงแม่เหล็กจากโต๊ะ'],0,'แรงโน้มถ่วงทำให้วัตถุโคจรรอบกัน'],
  ['Light Year','ปีแสงเป็นหน่วยวัดอะไร?',['ระยะทาง','เวลาเรียน','ความเร็วรถ','มวล'],0,'ปีแสงเป็นหน่วยระยะทางที่แสงเดินทางใน 1 ปี'],
  ['Boss Cosmos','บิกแบงเป็นแนวคิดเกี่ยวกับอะไร?',['กำเนิดและการขยายตัวของจักรวาล','การเกิดภูเขาไฟ','การเกิดเซลล์','วงจรไฟฟ้า'],0,'ทฤษฎีบิกแบงอธิบายกำเนิดและการขยายตัวของจักรวาล'],
  ['Boss Cosmos','ดาวเคราะห์ที่มีวงแหวนเด่นชัดที่สุดคือดวงใด?',['เสาร์','พุธ','โลก','อังคาร'],0,'ดาวเสาร์มีวงแหวนเด่นชัดมาก']
 ],
 force:[
  ['Newton Bridge','สูตรกฎข้อที่ 2 ของนิวตันคือข้อใด?',['F=ma','PV=nRT','V=IR','E=mc²'],0,'แรงลัพธ์เท่ากับมวลคูณความเร่ง หรือ F=ma'],
  ['Newton Bridge','วัตถุมวล 5 kg เร่ง 2 m/s² แรงลัพธ์เท่าไร?',['2.5 N','7 N','10 N','25 N'],2,'F=ma=5×2=10 N'],
  ['Motion Road','ความเร็วคืออะไร?',['ระยะทางต่อเวลา','มวลต่อปริมาตร','แรงต่อพื้นที่','พลังงานต่อประจุ'],0,'ความเร็วเป็นอัตราการเปลี่ยนระยะทางตามเวลา'],
  ['Gravity Field','น้ำหนักของวัตถุขึ้นกับอะไร?',['มวลและแรงโน้มถ่วง','สีของวัตถุ','อุณหภูมิห้องอย่างเดียว','รูปทรงเท่านั้น'],0,'น้ำหนัก W=mg'],
  ['Work Station','งานทางฟิสิกส์คำนวณได้จากอะไรเมื่อแรงทิศเดียวกับการเคลื่อนที่?',['W=Fs','W=IR','W=nRT','W=P/V'],0,'งาน W=แรง × ระยะทาง'],
  ['Energy Core','พลังงานจลน์ขึ้นกับอะไร?',['มวลและความเร็ว','สีและกลิ่น','อุณหภูมิเท่านั้น','ความดันแก๊ส'],0,'พลังงานจลน์ขึ้นกับมวลและความเร็ว'],
  ['Friction Zone','แรงเสียดทานมักมีทิศทางอย่างไร?',['ต้านการเคลื่อนที่','ไปทางเดียวกับความเร็วเสมอ','ขึ้นด้านบนเสมอ','ไม่มีทิศทาง'],0,'แรงเสียดทานต้านการเคลื่อนที่หรือแนวโน้มการเคลื่อนที่'],
  ['Momentum Port','โมเมนตัมคำนวณจากอะไร?',['p=mv','P=VI','PV=nRT','F=ma²'],0,'โมเมนตัม p=mv'],
  ['Boss Force Beast','ถ้าแรงลัพธ์เป็นศูนย์ วัตถุที่หยุดนิ่งจะเป็นอย่างไร?',['หยุดนิ่งต่อไป','เร่งขึ้นทันที','ลอยขึ้นเสมอ','มวลหายไป'],0,'ตามกฎข้อที่ 1 วัตถุจะรักษาสภาพการเคลื่อนที่เดิม'],
  ['Boss Force Beast','หน่วยของแรงคืออะไร?',['นิวตัน','วัตต์','โวลต์','พาสคัล'],0,'แรงมีหน่วยเป็นนิวตัน']
 ],
 chemi:[
  ['Reaction Lab','สารตั้งต้นในปฏิกิริยาเคมีเรียกว่าอะไร?',['Product','Reactant','Catalyst','Solvent'],1,'Reactant คือสารตั้งต้น Product คือผลิตภัณฑ์'],
  ['Atom Gate','อนุภาคใดมีประจุบวก?',['โปรตอน','นิวตรอน','อิเล็กตรอน','โฟตอน'],0,'โปรตอนมีประจุบวก'],
  ['Atom Gate','อิเล็กตรอนมีประจุอะไร?',['ลบ','บวก','เป็นกลาง','เปลี่ยนได้ตลอด'],0,'อิเล็กตรอนมีประจุลบ'],
  ['Molecule Lab','H₂O คือสารใด?',['น้ำ','ออกซิเจน','ไฮโดรเจน','คาร์บอนไดออกไซด์'],0,'H₂O คือโมเลกุลน้ำ'],
  ['Equation Room','สมการเคมีต้องดุลเพื่อให้เป็นไปตามกฎใด?',['อนุรักษ์มวล','แรงโน้มถ่วง','โอห์ม','ชาร์ล'],0,'จำนวนอะตอมก่อนและหลังปฏิกิริยาต้องเท่ากันตามกฎอนุรักษ์มวล'],
  ['Acid Base','กรดมักมีค่า pH เป็นอย่างไร?',['น้อยกว่า 7','เท่ากับ 14 เสมอ','มากกว่า 7','ไม่มี pH'],0,'กรดมี pH น้อยกว่า 7'],
  ['Acid Base','เบสมักมีค่า pH เป็นอย่างไร?',['มากกว่า 7','น้อยกว่า 7','เท่ากับ 0 เสมอ','ไม่มี pH'],0,'เบสมี pH มากกว่า 7'],
  ['Solution Bay','ตัวทำละลายในน้ำเกลือคืออะไร?',['น้ำ','เกลือ','แก๊ส','น้ำแข็งเท่านั้น'],0,'น้ำเป็นตัวทำละลาย เกลือเป็นตัวถูกละลาย'],
  ['Boss Chem Dragon','ตัวเร่งปฏิกิริยาทำหน้าที่อะไร?',['เพิ่มอัตราการเกิดปฏิกิริยาโดยไม่ถูกใช้หมด','ทำให้มวลหายไป','หยุดทุกปฏิกิริยา','เปลี่ยนน้ำเป็นโลหะ'],0,'ตัวเร่งช่วยให้ปฏิกิริยาเกิดเร็วขึ้นและไม่ถูกใช้หมด'],
  ['Boss Chem Dragon','CO₂ คือสารใด?',['คาร์บอนไดออกไซด์','คาร์บอนมอนอกไซด์','ออกซิเจน','โอโซน'],0,'CO₂ คือคาร์บอนไดออกไซด์']
 ]
};
const achievementRules=[
 {id:'first',name:'นักสำรวจคนแรก',emoji:'🚀',test:s=>s.totalAnswered>=1},
 {id:'ten',name:'นักล่าคำตอบ 10 ข้อ',emoji:'🧠',test:s=>s.totalAnswered>=10},
 {id:'perfect',name:'ไร้พลาดระดับเทพ',emoji:'💎',test:s=>s.lastPerfect===true},
 {id:'gasMaster',name:'ผู้พิชิต GASVERSE',emoji:'🧪',test:s=>(s.completed.gas||0)>=5},
 {id:'collector',name:'นักสะสมดาว',emoji:'⭐',test:s=>s.stars>=20},
 {id:'level5',name:'นักวิทย์เลเวล 5',emoji:'👑',test:s=>s.level>=5}
];
let state=JSON.parse(localStorage.getItem('scienceverse-state-v2')||localStorage.getItem('scienceverse-state')||'{}');
state={name:state.name||'นักสำรวจดาววิทย์',xp:state.xp||0,level:state.level||1,stars:state.stars||0,coins:state.coins||0,gems:state.gems||0,badges:state.badges||[],achievements:state.achievements||[],completed:state.completed||{},totalAnswered:state.totalAnswered||0,correctAnswered:state.correctAnswered||0,currentPlanet:null,playQueue:[],qIndex:0,score:0,lives:3,lastPerfect:false,teacher:{planet:'gas',mode:'Mission Quiz',team:'เดี่ยว'},...state};
const app=document.getElementById('app');
const shuffle=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
function normalizeQuestion(row){let [title,q,opts,ans,exp]=row; let mapped=opts.map((text,i)=>({text,correct:i===ans})); mapped=shuffle(mapped); return {title,q,opts:mapped.map(x=>x.text),ans:mapped.findIndex(x=>x.correct),exp};}
function save(){state.level=Math.floor(state.xp/120)+1;localStorage.setItem('scienceverse-state-v2',JSON.stringify(state));}
function checkAchievements(){let got=[];achievementRules.forEach(r=>{if(!state.achievements.includes(r.id)&&r.test(state)){state.achievements.push(r.id);state.badges.push(`${r.emoji} ${r.name}`);state.gems+=1;got.push(`${r.emoji} ${r.name}`)}}); if(got.length) save(); return got;}
function rewardBox(correct){let xp=correct?25:5, stars=correct?1:0, coins=correct?10:2; state.xp+=xp; state.stars+=stars; state.coins+=coins; return {xp,stars,coins};}
function setRoute(route,param){document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.route===route)); if(route==='home')home(); if(route==='map')map(); if(route==='profile')profile(); if(route==='library')library(); if(route==='teacher')teacher(); if(route==='planet')planet(param); if(route==='play')play(); if(route==='result')result(); window.scrollTo(0,0)}
document.querySelector('.bottom-nav').addEventListener('click',e=>{const b=e.target.closest('button'); if(b)setRoute(b.dataset.route)});
function home(){app.innerHTML=`<section class="hero"><div class="hero-card glass"><div class="orbit"></div><span class="badge">🌌 SCIENCEVERSE Academy V2</span><h1 class="title">จักรวาลวิทย์<br>พิชิตภารกิจ</h1><p class="subtitle">เวอร์ชันอัปเกรด: คำถามเยอะขึ้น สุ่มคำถาม สลับคำตอบ มีรางวัล เหรียญ เพชร Badge และโหมดครูแบบกดเลือกง่าย</p><div class="stat-row"><div class="stat glass"><b>${state.level}</b><span>Level</span></div><div class="stat glass"><b>${state.xp}</b><span>XP</span></div><div class="stat glass"><b>${state.coins}</b><span>Coins</span></div></div><div class="xpbar"><div class="xpfill" style="width:${state.xp%120/120*100}%"></div></div><div class="actions"><button class="btn primary" onclick="setRoute('map')">🚀 เริ่มภารกิจ</button><button class="btn ghost" onclick="setRoute('teacher')">👩‍🏫 โหมดครู</button></div></div></section>`}
function map(){app.innerHTML=`<div class="section-head"><div><h1>🌌 Galaxy Map</h1><p class="mini">เลือกดาว ระบบจะสุ่มคำถามและสลับตัวเลือกทุกครั้ง</p></div><span class="pill">Level ${state.level} · 💎 ${state.gems}</span></div><section class="grid">${planets.map(p=>`<article class="planet glass" onclick="setRoute('planet','${p.id}')"><div class="emoji">${p.emoji}</div><h2>${p.name}</h2><span class="pill">${p.topic}</span><p>${p.desc}</p><small>⭐ ผ่านแล้ว ${state.completed[p.id]||0} ข้อ · คลังคำถาม ${qbank[p.id].length} ข้อ</small></article>`).join('')}</section>`}
function planet(id){const p=planets.find(x=>x.id===id); state.currentPlanet=id; save(); const count=qbank[id].length; app.innerHTML=`<div class="section-head"><div><h1>${p.emoji} ${p.name}</h1><p class="mini">${p.desc}</p></div><button class="btn ghost" onclick="setRoute('map')">กลับแผนที่</button></div><div class="card glass dialogue"><div class="npc">👩‍🔬</div><div><b>ดร.นิวตรอน</b><p class="mini">ดาวนี้มีคลังคำถาม ${count} ข้อ ระบบจะสุ่มมา 5 ข้อต่อรอบ พร้อมสลับคำตอบอัตโนมัติ</p></div></div><div class="grid" style="margin-top:14px"><div class="card glass"><h2>🎯 Mission Quiz</h2><p class="mini">สุ่ม 5 ข้อ เล่นไว เหมาะกับเด็กเล่นมือถือ</p><button class="btn primary" onclick="startRound('${id}',5,'Mission Quiz')">เริ่ม 5 ข้อ</button></div><div class="card glass"><h2>👾 Boss Battle</h2><p class="mini">สุ่ม 10 ข้อ ท้าทายกว่า ได้รางวัลมากกว่า</p><button class="btn primary" onclick="startRound('${id}',10,'Boss Battle')">เริ่ม 10 ข้อ</button></div><div class="card glass"><h2>🏆 Quick Challenge</h2><p class="mini">สุ่ม 3 ข้อสำหรับเปิดคาบ/ท้ายคาบ</p><button class="btn ghost" onclick="startRound('${id}',3,'Quick Challenge')">เริ่ม 3 ข้อ</button></div></div>`}
function startRound(id,n,mode){state.currentPlanet=id;state.playQueue=shuffle(qbank[id]).slice(0,Math.min(n,qbank[id].length)).map(normalizeQuestion);state.qIndex=0;state.score=0;state.lives=3;state.roundTotal=state.playQueue.length;state.roundCorrect=0;state.currentMode=mode;state.lastPerfect=false;save();setRoute('play')}
function play(){const q=state.playQueue[state.qIndex]; const p=planets.find(x=>x.id===state.currentPlanet)||planets[0]; if(!q){result();return} const percent=(state.qIndex/state.roundTotal)*100; app.innerHTML=`<div class="section-head"><div><h1>🎮 ${q.title}</h1><p class="mini">${p.name} · ข้อ ${state.qIndex+1}/${state.roundTotal} · ชีวิต ${'❤️'.repeat(state.lives)} · คะแนน ${state.score}</p></div><span class="pill">${state.currentMode}</span></div><div class="xpbar"><div class="xpfill" style="width:${percent}%"></div></div><div class="card glass"><div class="dialogue"><div class="npc">🤖</div><div><b>AI Lab</b><p class="mini">คำถามและตัวเลือกถูกสุ่มใหม่ทุกครั้งที่เล่น</p></div></div><p class="question">${q.q}</p><div class="options">${q.opts.map((o,i)=>`<button class="option" onclick="answer(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div><div id="feedback"></div></div>`}
function answer(i){const q=state.playQueue[state.qIndex]; const fb=document.getElementById('feedback'); document.querySelectorAll('.option').forEach(b=>b.disabled=true); state.totalAnswered++; const correct=i===q.ans; let r=rewardBox(correct); if(correct){state.score+=100;state.roundCorrect++;state.correctAnswered++;state.completed[state.currentPlanet]=(state.completed[state.currentPlanet]||0)+1; fb.innerHTML=`<div class="feedback ok">✅ ถูกต้อง! เปิดกล่องรางวัล: +${r.xp} XP · +${r.coins} Coins · +${r.stars} ⭐<br>${q.exp}<br><br><button class="btn primary" onclick="nextQ()">ไปข้อต่อไป</button></div>`}else{state.lives--; fb.innerHTML=`<div class="feedback bad">💡 ยังไม่ใช่คำตอบน้า เฉลยคือ <b>${q.opts[q.ans]}</b><br>${q.exp}<br>ปลอบใจ +${r.xp} XP · +${r.coins} Coins<br><br><button class="btn primary" onclick="nextQ()">${state.lives>0?'ไปข้อต่อไป':'สรุปผล'}</button></div>`} save();}
function nextQ(){if(state.lives<=0||state.qIndex>=state.roundTotal-1){state.lastPerfect=state.roundCorrect===state.roundTotal;result();return} state.qIndex++;save();play();}
function result(){const p=planets.find(x=>x.id===state.currentPlanet)||planets[0]; let bonus=0;if(state.roundCorrect===state.roundTotal){bonus=50;state.xp+=bonus;state.gems+=1;state.lastPerfect=true} const newAch=checkAchievements();save();let rank=state.roundCorrect===state.roundTotal?'ปรมาจารย์ไร้พลาด':state.score>=500?'นักวิทย์ดาวรุ่ง':'นักสำรวจฝึกหัด'; app.innerHTML=`<div class="hero"><div class="hero-card glass"><span class="badge">🏆 Reward Room</span><h1 class="title">รับรางวัล!</h1><p class="subtitle">${p.emoji} ${p.name} · ระดับ: <b>${rank}</b></p><div class="stat-row"><div class="stat glass"><b>${state.score}</b><span>คะแนน</span></div><div class="stat glass"><b>${state.roundCorrect}/${state.roundTotal}</b><span>ตอบถูก</span></div><div class="stat glass"><b>${bonus?'+1':'0'}</b><span>เพชรโบนัส</span></div></div>${bonus?`<div class="feedback ok">💎 Perfect Bonus! ได้ +${bonus} XP และ +1 Gem</div>`:''}${newAch.length?`<div class="feedback ok">🏅 Achievement ใหม่: ${newAch.join(', ')}</div>`:''}<div class="actions"><button class="btn primary" onclick="startRound('${state.currentPlanet}',${state.roundTotal},'${state.currentMode}')">🔁 เล่นสุ่มใหม่</button><button class="btn ghost" onclick="setRoute('map')">🌌 เลือกดาวอื่น</button><button class="btn ghost" onclick="setRoute('library')">📚 ทบทวนสูตร</button></div></div></div>`}
function profile(){const achNames=state.achievements.map(id=>achievementRules.find(a=>a.id===id)).filter(Boolean); app.innerHTML=`<div class="section-head"><div><h1>🧑‍🚀 Student Profile</h1><p class="mini">ข้อมูลบันทึกในเครื่องนี้</p></div></div><div class="card glass"><div class="stat-row"><div class="stat glass"><b>${state.level}</b><span>Level</span></div><div class="stat glass"><b>${state.xp}</b><span>XP</span></div><div class="stat glass"><b>${state.coins}</b><span>Coins</span></div></div><div class="stat-row"><div class="stat glass"><b>${state.stars}</b><span>Stars</span></div><div class="stat glass"><b>${state.gems}</b><span>Gems</span></div><div class="stat glass"><b>${state.correctAnswered}/${state.totalAnswered}</b><span>ถูก/ทั้งหมด</span></div></div><h2>🏅 Badge & Achievement</h2><div class="grid">${(state.badges.length?state.badges:['ยังไม่มี Badge ลองเริ่มภารกิจแรกเลย']).map(b=>`<div class="card glass">${b}</div>`).join('')}</div><br><button class="btn ghost" onclick="localStorage.removeItem('scienceverse-state-v2');localStorage.removeItem('scienceverse-state');location.reload()">รีเซ็ตข้อมูล</button></div>`}
function library(){app.innerHTML=`<div class="section-head"><div><h1>📚 Knowledge Library</h1><p class="mini">สรุปสูตรและแก่นความรู้แบบการ์ดจำง่าย</p></div></div><div class="grid"><div class="card glass"><h2>🧪 GASVERSE</h2><div class="formula">Boyle: P₁V₁=P₂V₂ · P เพิ่ม V ลด</div><div class="formula">Charles: V₁/T₁=V₂/T₂ · ใช้ K</div><div class="formula">Avogadro: V ∝ n</div><div class="formula">Ideal Gas: PV=nRT</div></div><div class="card glass"><h2>⚡ ELECTROVERSE</h2><div class="formula">Ohm: V=IR</div><div class="formula">Power: P=VI</div></div><div class="card glass"><h2>🧬 CELLVERSE</h2><div class="formula">นิวเคลียสควบคุมเซลล์</div><div class="formula">ไมโทคอนเดรียสร้าง ATP</div></div><div class="card glass"><h2>🧲 FORCEVERSE</h2><div class="formula">Newton 2: F=ma</div><div class="formula">Work: W=Fs</div></div></div>`}
function teacher(){app.innerHTML=`<div class="section-head"><div><h1>👩‍🏫 Teacher Dashboard</h1><p class="mini">ปรับใหม่แล้ว: ไม่ต้องพิมพ์เยอะ กดเลือกกิจกรรมได้เลย</p></div></div><div class="card glass"><h2>1) เลือกดาวบทเรียน</h2><div class="grid">${planets.map(p=>`<button class="btn ${state.teacher.planet===p.id?'primary':'ghost'}" onclick="state.teacher.planet='${p.id}';save();teacher()">${p.emoji} ${p.name}</button>`).join('')}</div><h2>2) เลือกโหมดกิจกรรม</h2><div class="actions">${['Quick Challenge','Mission Quiz','Boss Battle','Team Battle'].map(m=>`<button class="btn ${state.teacher.mode===m?'primary':'ghost'}" onclick="state.teacher.mode='${m}';save();teacher()">${m}</button>`).join('')}</div><h2>3) เริ่มใช้งานในห้อง</h2><p class="mini">เลือกแล้ว: <b>${planets.find(p=>p.id===state.teacher.planet).name}</b> · <b>${state.teacher.mode}</b></p><div class="actions"><button class="btn primary" onclick="startRound(state.teacher.planet,state.teacher.mode==='Boss Battle'?10:state.teacher.mode==='Quick Challenge'?3:5,state.teacher.mode)">🚀 เริ่มกิจกรรม</button><button class="btn ghost" onclick="window.print()">🖨️ พิมพ์/บันทึกผล</button></div></div><div class="card glass" style="margin-top:14px"><h2>📊 รายงานเครื่องนี้</h2><table class="teacher-table"><tr><th>รายการ</th><th>ข้อมูล</th></tr><tr><td>Level</td><td>${state.level}</td></tr><tr><td>XP</td><td>${state.xp}</td></tr><tr><td>ตอบถูก/ทั้งหมด</td><td>${state.correctAnswered}/${state.totalAnswered}</td></tr><tr><td>Coins/Gems</td><td>${state.coins} / ${state.gems}</td></tr><tr><td>Badge</td><td>${state.badges.join(', ')||'-'}</td></tr></table></div>`}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}))}
home();
