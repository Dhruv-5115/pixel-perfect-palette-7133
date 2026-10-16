import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/ucan/public-pages';
export const Route=createFileRoute('/$section')({head:({params})=>{const title=params.section.replaceAll('-',' ').replace(/\b\w/g,c=>c.toUpperCase());const description=`Explore U CAN ${title.toLowerCase()}: human-guided speech practice and connected rehabilitation care.`;return{meta:[{title:`${title} — U CAN`},{name:'description',content:description},{property:'og:title',content:`${title} — U CAN`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}},component:Page});
function Page(){const{section}=Route.useParams();return <PublicPage section={section}/>}
