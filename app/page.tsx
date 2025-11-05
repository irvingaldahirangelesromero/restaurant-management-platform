import Button from '@/components/Button';
import Nav from '@/components/nav';

export default function HomePage() {
    return (
        <Nav>
                <Button
                    type='button'
                    style=''
                    label='Acceder'
                    url='/login'
                    className='flex w-full justify-center rounded-xl bg-[#232f38] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg hover:bg-[#3b4b57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#232f38]'
                    />
        </Nav>
    )

}