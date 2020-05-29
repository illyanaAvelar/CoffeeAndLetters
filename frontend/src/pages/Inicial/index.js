import React, {Component} from 'react';
import { Link, useHistory } from 'react-router-dom';
import TreeMenu from 'react-simple-tree-menu';
import { FiInstagram, FiFacebook, FiMail, FiTwitter } from 'react-icons/fi';
import CommentForm from './CommentForm'

import './style.scss';

import Poema from '../../components/poema';
import poemas from '../../poemas';

window.onclick = function(e)
    {   var id =  e.target.id;   
     if (id === 'sent')  
     { var txt = `document.getElementById('example').value  
       $( "#para" ).empty().append( txt )`;
     }
    }
 
    const treeData = {
        'first-level-node-1': {               
            label: 'Romance',
            index: 0, 
            nodes: {
                    'second-level-node-1': {
                        label: 'Mosaico',
                        index: 0,
                        y: 7800,
                    },
                    'second-level-node-2': {
                        label: 'Poema à Toa',
                        index: 1,
                        y:7250,
                    },
                    'second-level-node-3': {
                        label: 'Por Tudo que Há',
                        index: 2,
                        y:5300,
                    },
                    'second-level-node-4': {
                        label: 'Declaração',
                        index: 3,
                        y: 2450,
                    },
                    'second-level-node-5': {
                        label: 'Palavras',
                        index: 4,
                        y: 1250,
                    },
                    
                },
            },
            'first-level-node-2': {               
                label: 'Familia',
                index: 1, 
                nodes: {
                    'second-level-node-1': {
                        label: 'Colcha de Retalhos',
                        index: 0,
                        y: 3650,
                    },
                },
            },
            'first-level-node-3': {               
                label: 'Natureza',
                index: 2, 
                nodes: {
                    'second-level-node-1': {
                        label: 'Voo',
                        index: 0,
                        y:9000,
                    },
                    'second-level-node-2': {
                        label: 'Um Dia',
                        index: 1,
                        y:8600,
                    },                    
                    'second-level-node-3': {
                        label: 'Clamor',
                        index: 2,
                        y: 3000,
                    },
                    'second-level-node-4': {
                        label: 'Sina',
                        index: 3,
                        y:1750,
                    },
                },
            },
            'first-level-node-4': {               
                label: 'Outros Autores',
                index: 3, 
                nodes: {
                    'second-level-node-1': {
                        label: 'Clarice Lispector - Eu',
                        index: 0,
                        y:680,
                    },
                },
            },
        };
        

export default function Inicial() {
   /* constructor(props) {
        super(props);
    
        this.state = {
          comments: [],
          loading: false
        };
    }
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    this.addComment = this.addComment.bind(this);
    addComment(comment) {
        this.setState({
          loading: false,
          comments: [comment, ...this.state.comments]
        });
    }*/
    const history = useHistory();
    return (
        <div className = "parallax">
            <div className = "container">
                <div className = "header">
                    <div className = "titulo">
                        Coffee and Letters
                    </div>
                </div>
                <div className = "body">
                    <div className="content">
                        {poemas.map(poema => {
                            return <Poema title={poema.title} text={poema.text} author={poema.author}/>

                        })}
        
                    </div>
                    <div className = "corner">
                        <div className="about">
                            <div className = "foto"/>
                            <div className = "descricao">
                                <div className = "nome">
                                Silvânia Márcia Guimarães
                                </div> 
                                <div className = "texto">
                                    Professora, mãe, mulher, dona de casa. Cidadã idealista incorrigível. Formada em magistério. Cursou pedagogia pela UFJF e letras pela UFMG (incompletos) onde cresceu sua paixão por poesia e artes em geral. Cursou LIBRAS (UNEC) e se formou, com mérito acadêmico, em direito pela FIC - Caratinga MG.   
                                </div> 
                            </div>
                        </div>
                        <div className = "info">
                            <div className = "social">
                                <a className = "instagram" target = "_blank" href = 'https://www.instagram.com/?hl=pt-br'>
                                    <FiInstagram size = {20} color = "#963a56"/> 
                                </a>
                                <a className = "facebook" target = "_blank" href = 'https://www.facebook.com/guimaraesdeavelar?__tn__=C-R&eid=ARARCZXZz2tk4vJzkmPnt9ifWFa1r3UvJ0IXKBaYhcOw2At9ovOTDtU_IwRbVQgPRYYbB5A4tevkrZhM&hc_ref=ARRm57JROSBNk0375N3cAD45bBzuHf1VoBWdoQYbP8HX7XqH1EejjmITxoeSVjhKfvk&fref=nf&__xts__[0]=68.ARC4iM0qDzKvcmfRjfIBXDwxpkms33BlYIKZFl4qygN9MFEgHUnUlT7tlm9MRNO36kFzqCdr_QYZBfJjXWiv8tfpqvCyqgFBvEQLqSBqJhE0MGlL3fXKZJXL-6qnMyKp6gTBX2HjIjYTOzq-wmW_fSy6B2ilXxV19arlZMPPGbta0no4ZRu6uhF642mL__vWzSOWJ05shqplnV1-92WYvkBvmfzTWdu2hd0clCQmbbrzry_kI3AqF9GROJmAUXm3FUxLWyF4UJds9MnVx_-2bHjdtw-f8JKI8wUHd65B7Iu1uBsIrFbJoXcEmOaz3_xPFmn9egr6iZQ-KmCYF9laONc'>
                                    <FiFacebook size = {20} color = "#963a56"/> 
                                </a>
                                <a className = "twitter" target = "_blank" href = 'https://twitter.com/login?lang=pt'>
                                    <FiTwitter size = {20} color = "#963a56"/> 
                                </a>
                                <a className = "google" target = "_blank" href = 'https://mail.google.com/'>
                                    <FiMail size = {20} color = "#963a56"/> 
                                </a>
                            </div>
                            <div className = "categories">
                                <TreeMenu 
                                    data={treeData}
                                    onClickItem={({ y, key, label , ...props }) => {
                                        window.scrollTo({
                                            top: document.documentElement.scrollHeight - y,    
                                            behavior:"smooth"})
                                      }}
                                />               
                            </div>
                            <div className = "subscribeTitle">
                                Inscreva-se para receber novas publicações
                            </div>
                            <div className = "subscribe">
                                <input id = "comment"
                                class = "email"
                                name = "commentBox"
                                maxLength = "40"/>
                                <input id = "sent"
                                type = "submit"
                                class = "sendButton"
                                value = "Inscrever"
                                name = "sendButton"/>
                            </div>
                            <div className = "commentTitle">
                                Comentários
                            </div>
                            <div className = "comments">
                            <CommentForm class = "comment"/>
                     
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            
        </div>
    )
}

