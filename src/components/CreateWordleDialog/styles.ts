import tw, { styled } from 'twin.macro';
import RModal from 'react-modal';


export const Modal = styled(RModal)`
    ${tw`
    fixed inset-0 z-10 w-screen overflow-y-auto
    `}
`