"use client"
import {useTranslations} from 'next-intl';
import { useRouter } from 'next/navigation';
 
export default function HomePage() {
    const router = useRouter()
  const t = useTranslations("HomePage");
  return (
    <div>
        <h1>{t('title')}</h1>
        <h2>{t("company")}</h2>
        <button onClick={()=>{router.push("/en")}}>Chuyển sang en</button>
    </div>
    
  )
}