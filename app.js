const recipes = [
  {emoji:'🍚', color:'#e2bc87'},
  {emoji:'🫓', color:'#d8dfb9'},
  {emoji:'🍝', color:'#e8b9a3'},
  {emoji:'🍳', color:'#decf9e'}
];
document.querySelector('#recipe-grid').innerHTML = recipes.map((r,i)=>`<article class="recipe-card"><div class="recipe-art" style="--tile:${r.color}"><span class="recipe-number">RECIPE / 0${i+1}</span><div class="mini-plate" aria-hidden="true">${r.emoji}</div></div><div class="recipe-body"><span class="tag">INSERT TEXT HERE</span><h3>Insert recipe ${i+1} name here</h3><div class="recipe-stats"><span>Time: — · Servings: —</span><span>$— / serving</span></div><button data-recipe="${i}">View recipe <span>↗</span></button></div></article>`).join('');
document.querySelector('#grocery-items').innerHTML = '<div class="grocery-row"><strong>Item</strong><span>Quantity / package</span><strong>Buy cost</strong></div>' + Array.from({length:8},()=>'<div class="grocery-row"><span>Insert item here</span><span>Insert quantity</span><span>$—</span></div>').join('');
const dialog = document.querySelector('dialog');
document.querySelectorAll('[data-recipe]').forEach(b=>b.addEventListener('click',()=>{
  const i=Number(b.dataset.recipe)+1;
  document.querySelector('#recipe-detail').innerHTML=`<div class="eyebrow">RECIPE ${i}</div><h2>Insert recipe ${i} name here</h2><p class="detail-stats">Servings: — · Prep: — min · Cook: — min<br>Cost: $— / serving · Calories: — · Protein: — g</p><p class="fine">Insert recipe notes here.</p><h3>Ingredients</h3><ul><li>Insert ingredient and quantity here.</li><li>Insert ingredient and quantity here.</li><li>Insert ingredient and quantity here.</li></ul><h3>Instructions</h3><ol><li>Insert step one here.</li><li>Insert step two here.</li><li>Insert step three here.</li></ol>`;
  dialog.showModal();
}));
document.querySelector('.close').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
