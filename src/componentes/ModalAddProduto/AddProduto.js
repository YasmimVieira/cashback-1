import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
    FormGroup, Label, Input 
} from 'reactstrap';

const AddProduto = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Button color="success" size="large" onClick={toggle}>
        Adicionar produto
    </Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn} className="title">
          Cadastrar produto
        </ModalHeader>
      <ModalBody>
        <FormGroup className="mb-3">
            <Label for="codigo">Código</Label>
            <Input type="text" id="codigo" placeholder="Código do produto" />
        </FormGroup>
        <FormGroup className="mb-3">
            <Label for="valor">Valor</Label>
            <Input type="text" id="valor" placeholder="Valor pago no produto" />
        </FormGroup>
        <FormGroup className="mb-3">
            <Label for="data">Data</Label>
            <Input type="date" id="data" placeholder="date placeholder" />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
          <Button color="success" onClick={toggle}>Adicionar</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default AddProduto;