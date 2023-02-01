import Button from '@components/Button/Button'
import Modal from '@components/Modal/Modal'
import Text from '@components/Text/Text'
import { useState } from 'react'

// const getRandom = (await import('core/getRandom')).default

export default function Home() {
  // console.log(getRandom())
  const [toggleModal, setToggleModal] = useState(false)

  return (
    <div>
      <Button label='Button' $variant='primary' $size='sm' onClick={() => setToggleModal(!toggleModal)} />

      {toggleModal && (
        <Modal maxWidth={300} type={'warning'}>
          <Text textAlign={'center'} color="primary" mb={{xs: 3}} mx={{xs: 'auto' }} maxWidth={122}  fontWeight={{xs: 'bold'}}>Información a tomar en cuenta</Text>
          <Text textAlign={'center'} mb={30} color="gray-4">Recuerda que por tu seguridad, el pedido solo será entregado al titular de la línea.</Text>
          <Button label='Entendido' fontSize={18} width={'100%'} $variant='success' onClick={()=> setToggleModal(!toggleModal)} />
        </Modal>
      )}
    </div>
  )
}
