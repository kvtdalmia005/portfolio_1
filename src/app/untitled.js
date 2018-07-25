@-webkit-keyframes bugfix { from {padding:0;} to {padding:0;} }

input[type=checkbox] {
  position: absolute;
  top: -9999px;
  left: -9999px;
}

label { 
  display:none;
  cursor: pointer;
  user-select:none;
}


nav[role="custom-dropdown"] {
  position:relative;
  width: 100%;
    
  a,
  label {
    color:#ccc;
    text-decoration:none;
    font: 1.4em sans-serif;
    transition:color .3s ease-in-out;
  }
    
  ul {
    padding: 0;  
    margin: 0 auto;  
    width:100%;
    list-style:none;
    
    > li {
      float:left;
      padding:.55em .55em;
      width:19%;
      text-align:center;
      transition-duration: .3s;
      transition-timing-function: ease-in-out;
      transition-property: box-shadow, color;
      box-shadow:
        0 .05em .25em 0 rgba(0, 0, 0, .35)
      ;
      cursor: pointer;
    
      &:hover {
        background-color:rgba(0, 0, 0, .85);
        color:#fff;
        box-shadow:
          0 .05em .25em 0 rgba(0, 0, 0, .35),
          inset 0 0 0 2em rgba(0, 0, 0, .3)
        ;
    
        > a {
          color:#fff;
        }
      }
    }
  }
}

/* small screens */
@media screen and (max-width: 44em) {
  html,
  body {
    margin:0;      
  }

  nav[role="custom-dropdown"] {
    ul {
      display:none;
      height:100%;
    }

    label {
      position:relative;
      display:block;
      min-height:2.25em;
      padding:.45em;
      font-size:1.1em;
      margin:0;
      border: .15em solid rgba(60, 60, 60, .2);
    }
    
    label:after {
      position: absolute;
      right: .25em;  
      top: 0; 
      content:"\2261";
      font-size:1.8em;
    }
    
    input[type=checkbox]:checked ~ label:after {
      color:#222;
    }
        
    input[type=checkbox]:checked ~ ul {
      display:block;
        
      > li {
        width:100%;
        opacity:.8;
        text-align:left;
    
        &:after {
          position:absolute;
          right:.25em;
          content:"\203A";
          font: bold 1.4em sans-serif;
        }
      }        
    }
  }
}