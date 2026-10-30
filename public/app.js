const form=document.querySelector('#lead-form');
const range=document.querySelector('#valor');
const output=document.querySelector('#amount');
const money=new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
function updateAmount(){output.value=money.format(Number(range.value));range.style.background=`linear-gradient(to right,#0c51dc ${Number(range.value)/20000}%,#e7ebf2 ${Number(range.value)/20000}%)`;document.querySelectorAll('[data-value]').forEach(b=>b.classList.toggle('active',b.dataset.value===range.value));document.querySelector('#form-error').textContent='';}
range.addEventListener('input',updateAmount);
document.querySelectorAll('[data-value]').forEach(b=>b.addEventListener('click',()=>{range.value=b.dataset.value;updateAmount();}));
function buildWhatsAppUrl({tipo,valor,nome,telefone}){const message=`Olá, TVM Promotora! Moro nos Estados Unidos e gostaria de uma simulação de consórcio.\n\nNome: ${nome}\nWhatsApp: ${telefone}\nTipo de bem: ${tipo}\nValor desejado: ${money.format(Number(valor))}\n\nQuero conhecer as opções disponíveis para o meu objetivo no Brasil.`;return `https://wa.me/553175124983?text=${encodeURIComponent(message)}`;}
let submitting=false;
window.addEventListener('pageshow',()=>{submitting=false;});
form.addEventListener('submit',async event=>{event.preventDefault();if(submitting)return;const data=Object.fromEntries(new FormData(form));data.nome=data.nome.trim();data.telefone=data.telefone.trim();const error=document.querySelector('#form-error');if(Number(data.valor)<=0){error.textContent='Escolha um valor maior que zero para o bem.';range.focus();return;}if(data.nome.length<2){error.textContent='Informe seu nome para continuar.';document.querySelector('#nome').focus();return;}const digits=data.telefone.replace(/\D/g,'');if(!/^\+?[\d\s().-]+$/.test(data.telefone)||digits.length<10||digits.length>15){error.textContent='Informe um WhatsApp válido, incluindo o código do país e o DDD.';document.querySelector('#telefone').focus();return;}if(!['Imóveis','Veículos'].includes(data.tipo)){error.textContent='Escolha o tipo de bem para continuar.';return;}error.textContent='';submitting=true;
// Conta o avanço ao WhatsApp; não confirma o envio da mensagem.
// Não envia nome, telefone, valor de crédito ou respostas à Meta.
if(typeof window.fbq==='function'){
  try{
    window.fbq('trackSingle','28976308445355243','Lead');
    // Dá tempo ao pixel para iniciar a requisição antes de sair da página.
    await new Promise(resolve=>setTimeout(resolve,300));
  }catch{/* Falhas no pixel não impedem o atendimento. */}
}
window.location.assign(buildWhatsAppUrl(data));});
const dialog=document.querySelector('#privacy-dialog');document.querySelectorAll('#privacy-open,#privacy-footer').forEach(b=>b.addEventListener('click',()=>dialog.showModal()));document.querySelector('#privacy-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
updateAmount();
