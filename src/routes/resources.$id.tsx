import { createFileRoute } from '@tanstack/react-router';
import { ResourceDetail, resources } from '@/components/ucan/public-pages';
export const Route=createFileRoute('/resources/$id')({head:({params})=>{const item=resources.find(r=>r.id===params.id);const title=`${item?.title||'Resource unavailable'} — U CAN`;const description=item?.description||'Explore U CAN’s sample resource library.';return{meta:[{title},{name:'description',content:description},{property:'og:title',content:title},{property:'og:description',content:description},{property:'og:type',content:'article'},{name:'twitter:card',content:'summary_large_image'}]}},component:Page});
function Page(){const{id}=Route.useParams();return <ResourceDetail id={id}/>}
