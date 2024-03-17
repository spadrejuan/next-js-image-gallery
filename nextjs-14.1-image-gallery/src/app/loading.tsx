import {Spinner} from '@/components/bootstrap'
// The global loading page (NOTE: has to be the exact same filename)
export default function Loading() {
    return <Spinner animation='border' className='d-block m-auto'/>
}