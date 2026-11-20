 "use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { categories, products, type Locale, type Product } from "@/data/menu";
import { copy } from "@/data/i18n";

const money = (n:number) => `${n.toLocaleString("ru-RU")} ₸`;
const categoryImages:Record<string,string> = {
 broth:"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900&q=85",
 lamb:"https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85",
 beef:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900&q=85",
 chicken:"https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=900&q=85",
 seafood:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=900&q=85",
 fish:"https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=900&q=85",
 mushrooms:"https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=900&q=85",
 vegetables:"https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&q=85",
 sets:"https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85"
};
const contacts=[{label:"+7 747 131-40-70",phone:"77471314070"},{label:"+7 707 382-78-17",phone:"77073827817"}];

export default function MenuApp(){
 const [lang,setLang]=useState<Locale>("ru");
 const [category,setCategory]=useState("all");
 const [query,setQuery]=useState("");
 const [cart,setCart]=useState<Record<string,number>>({});
 const [drawer,setDrawer]=useState(false);
 const [qr,setQr]=useState(false);
 const [guest,setGuest]=useState("");
 const [phone,setPhone]=useState("");
 const [comment,setComment]=useState("");
 const [contact,setContact]=useState(contacts[0].phone);
 const [orderError,setOrderError]=useState("");
 const t=copy[lang];
 const shown=useMemo(()=>products.filter(p=>(category==="all"||p.category===category)&&`${p.name.ru} ${p.name.kk} ${p.name.en}`.toLowerCase().includes(query.toLowerCase())),[category,query]);
 const total=Object.entries(cart).reduce((sum,[id,qty])=>sum+(products.find(p=>p.id===id)?.price??0)*qty,0);
 const count=Object.values(cart).reduce((a,b)=>a+b,0);
 const add=(id:string)=>setCart(old=>({...old,[id]:(old[id]||0)+1}));
 const change=(id:string,n:number)=>setCart(old=>{const next={...old,[id]:(old[id]||0)+n};if(next[id]<=0)delete next[id];return next});
 const name=(p:Product)=>p.name[lang];
 const openWhatsApp=()=>{
  if(!count){setOrderError(t.empty);return}
  const lines=Object.entries(cart).map(([id,qty])=>{const p=products.find(x=>x.id===id)!;return `• ${name(p)} × ${qty} — ${money(p.price*qty)}`});
  const message=[t.orderMsg,`${t.name}: ${guest||"—"}`,`${t.phone}: ${phone||"—"}`,...lines,`${t.total}: ${money(total)}`,`${t.comment}: ${comment||"—"}`].join("\n");
  window.open(`https://wa.me/${contact}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
  setOrderError("");
 };
 const menuUrl=typeof window!=="undefined"?window.location.href:"https://example.com";
 return <main>
  <header className="topbar"><a className="wordmark" href="#"><span>TAU</span> <i>HOGO</i></a><div className="top-actions"><span className="open-pill"><b/>24/7</span><div className="language">{(["ru","kk","en"] as Locale[]).map(l=><button key={l} className={lang===l?"selected":""} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div></div></header>
  <section className="hero">
   <div className="hero-copy"><div className="eyebrow">{t.eyebrow}</div><h1>TAU <em>HOGO</em></h1><p>{t.heroText}</p><div className="hero-meta"><span>ALMATY · KAZAKHSTAN</span><span>HOT POT EXPERIENCE</span></div><a className="hero-cta" href="#menu">{t.menu} <span>↘</span></a></div>
   <div className="hero-photo"><div className="hero-photo-overlay"/><div className="photo-caption"><span>01 / SIGNATURE EXPERIENCE</span><strong>Gather around<br/>the hot pot.</strong></div></div>
  </section>
  <section className="menu-section" id="menu">
   <div className="section-heading"><div><div className="eyebrow">TAU HOGO · MENU</div><h2>{t.menu}</h2><p>{t.menuSub}</p></div><div className="count-label">{products.length} {t.items}</div></div>
   <div className="toolbar"><div className="searchbox"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.search}/>{query&&<button onClick={()=>setQuery("")}>×</button>}</div><div className="category-list">{categories.map(c=><button key={c.id} className={category===c.id?"active":""} onClick={()=>setCategory(c.id)}>{c.id==="all"?t.all:c[lang]}</button>)}</div></div>
   {shown.length===0?<div className="no-results">{t.noResults}</div>:<div className="product-grid">{shown.map((p,i)=><article className="product-card" key={p.id}><div className="product-image"><Image src={categoryImages[p.category]} alt={p.name.en} fill sizes="(max-width:700px) 50vw, 25vw" unoptimized/><span className="image-index">{String(i+1).padStart(2,"0")}</span></div><div className="product-info"><div className="product-category">{categories.find(c=>c.id===p.category)?.[lang]}</div><h3>{name(p)}</h3><div className="product-bottom"><strong>{money(p.price)}</strong><button onClick={()=>add(p.id)} aria-label={`${t.add}: ${name(p)}`}>＋ <span>{t.add}</span></button></div></div></article>)}</div>}
   <p className="price-note">{t.priceNote}</p>
  </section>
  <section className="about-section"><div className="about-image"><Image src={categoryImages.broth} alt="Hot pot dining" fill sizes="50vw" unoptimized/></div><div className="about-copy"><div className="eyebrow">THE TAU HOGO EXPERIENCE</div><h2>{t.about}</h2><p>{t.aboutText}</p><div className="address-block"><span>{t.address}</span><a href="https://2gis.kz/almaty/geo/70000001074553453/76.900477,43.144892" target="_blank" rel="noreferrer">{t.directions} ↗</a></div><div className="contact-links"><a href="tel:+77073827817">+7 707 382-78-17</a><a href="tel:+77471314070">+7 747 131-40-70</a></div><p className="hours">{t.hours}</p></div></section>
  <footer><a className="wordmark" href="#"><span>TAU</span> <i>HOGO</i></a><div>{t.notice}</div><button className="qr-link" onClick={()=>setQr(true)}>{t.qr} ↗</button></footer>
  <button className="floating-cart" onClick={()=>setDrawer(true)}><span>▣</span>{t.cart}<b>{count}</b><strong>{money(total)}</strong></button>
  {drawer&&<div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setDrawer(false)}}><aside className="cart-drawer"><div className="drawer-head"><div><div className="eyebrow">TAU HOGO</div><h2>{t.cart}</h2></div><button className="icon-button" onClick={()=>setDrawer(false)}>×</button></div>
   {count===0?<div className="empty-cart"><div className="empty-icon">＋</div><h3>{t.empty}</h3><p>{t.emptySub}</p><button className="primary-button" onClick={()=>setDrawer(false)}>{t.continue}</button></div>:<><div className="cart-lines">{Object.entries(cart).map(([id,qty])=>{const p=products.find(x=>x.id===id)!;return <div className="cart-line" key={id}><div><strong>{name(p)}</strong><small>{money(p.price)} / шт.</small></div><div className="quantity"><button onClick={()=>change(id,-1)}>−</button><span>{qty}</span><button onClick={()=>change(id,1)}>＋</button></div><b>{money(p.price*qty)}</b></div>})}</div><div className="cart-total"><span>{t.total}</span><strong>{money(total)}</strong></div><div className="checkout-form"><label>{t.name}<input value={guest} onChange={e=>setGuest(e.target.value)} placeholder={t.name}/></label><label>{t.phone}<input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+7 ___ ___ __ __" inputMode="tel"/></label><label>{t.comment}<textarea value={comment} onChange={e=>setComment(e.target.value)} rows={2}/></label><label>{t.selectContact}<select value={contact} onChange={e=>setContact(e.target.value)}>{contacts.map(c=><option key={c.phone} value={c.phone}>{c.label}</option>)}</select></label>{orderError&&<p className="form-error">{orderError}</p>}<button className="primary-button" onClick={openWhatsApp}>{t.send} ↗</button></div></>}
  </aside></div>}
  {qr&&<div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setQr(false)}}><div className="qr-modal"><button className="icon-button" onClick={()=>setQr(false)}>×</button><h2>{t.qr}</h2><QRCodeSVG value={menuUrl} size={220} bgColor="#ffffff" fgColor="#11120f" includeMargin/><p>{t.qrInfo}</p><button className="primary-button" onClick={()=>window.print()}>Print QR</button></div></div>}
 </main>
}
