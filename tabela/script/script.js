var nome = window.document.getElementById('nome')
var H = window.document.getElementById('H')
var h = window.document.getElementById('h')

var Li = window.document.getElementById('Li')
var Be = window.document.getElementById('Be')
var B = window.document.getElementById('B')
var C = window.document.getElementById('C')
var N = window.document.getElementById('N')
var O = window.document.getElementById('O')
var F = window.document.getElementById('F')
var Ne = window.document.getElementById('Ne')

var Na =  window.document.getElementById('Na')
var Mg =  window.document.getElementById('Mg')
var Al =  window.document.getElementById('Al')
var Si =  window.document.getElementById('Si')
var P =  window.document.getElementById('P')
var S =  window.document.getElementById('S')
var Cl =  window.document.getElementById('Cl')
var Ar =  window.document.getElementById('Ar')

var K =  window.document.getElementById('K')
var Ca =  window.document.getElementById('Ca')
var Sc =  window.document.getElementById('Sc')
var Ti =  window.document.getElementById('Ti')
var V =  window.document.getElementById('V')
var Cr =  window.document.getElementById('Cr')
var Mn =  window.document.getElementById('Mn')
var Fe =  window.document.getElementById('Fe')
var Co =  window.document.getElementById('Co')
var Ni =  window.document.getElementById('Ni')
var Cu =  window.document.getElementById('Cu')
var Zn =  window.document.getElementById('Zn')
var Ga =  window.document.getElementById('Ga')
var Ge =  window.document.getElementById('Ge')
var As =  window.document.getElementById('As')
var Se =  window.document.getElementById('Se')
var Br =  window.document.getElementById('Br')
var Kr =  window.document.getElementById('Kr')

var Rb =  window.document.getElementById('Rb')
var Sr =  window.document.getElementById('Sr')
var Y =  window.document.getElementById('Y')
var Zr =  window.document.getElementById('Zr')
var Nb =  window.document.getElementById('Nb')
var Mo =  window.document.getElementById('Mo')
var Tc =  window.document.getElementById('Tc')
var Ru =  window.document.getElementById('Ru')
var Rh =  window.document.getElementById('Rh')
var Pd =  window.document.getElementById('Pd')
var Ag =  window.document.getElementById('Ag')
var Cd =  window.document.getElementById('Cd')
var In =  window.document.getElementById('In')
var Sn =  window.document.getElementById('Sn')
var Sb =  window.document.getElementById('Sb')
var Te =  window.document.getElementById('Te')
var I =  window.document.getElementById('I')
var Xe =  window.document.getElementById('Xe')

var Cs =  window.document.getElementById('Cs')
var Ba =  window.document.getElementById('Ba')
var Lu =  window.document.getElementById('Lu')
var Hf =  window.document.getElementById('Hf')
var Ta =  window.document.getElementById('Ta')
var W =  window.document.getElementById('W')
var Re =  window.document.getElementById('Re')
var Os =  window.document.getElementById('Os')
var Ir =  window.document.getElementById('Ir')
var Pt =  window.document.getElementById('Pt')
var Au =  window.document.getElementById('Au')
var Hg =  window.document.getElementById('Hg')
var Tl =  window.document.getElementById('Tl')
var Pb =  window.document.getElementById('Pb')
var Bi =  window.document.getElementById('Bi')
var Po =  window.document.getElementById('Po')
var At =  window.document.getElementById('At')
var Rn =  window.document.getElementById('Rn')

var Fr = window.document.getElementById('Fr')
var Ra = window.document.getElementById('Ra')
var Lr = window.document.getElementById('Lr')
var Rf = window.document.getElementById('Rf')
var Db = window.document.getElementById('Db')
var Sg = window.document.getElementById('Sg')
var Bh = window.document.getElementById('Bh')
var Hs = window.document.getElementById('Hs')
var Mt = window.document.getElementById('Mt')
var Ds = window.document.getElementById('Ds')
var Rg = window.document.getElementById('Rg')
var Cn = window.document.getElementById('Cn')
var Nh = window.document.getElementById('Nh')
var Fl = window.document.getElementById('Fl')
var Mc = window.document.getElementById('Mc')
var Lv = window.document.getElementById('Lv')
var Ts = window.document.getElementById('Ts')
var Og = window.document.getElementById('Og')

var le = window.document.getElementById('le')
var si = window.document.getElementById('si')
var na = window.document.getElementById('na')
var ma = window.document.getElementById('ma')
var ce = window.document.getElementById('ce')

function carregar() {
    le.style.background = 'white'
    le.innerHTML = 'Letra'
}

//Hidrogênio
H.addEventListener('mouseenter', enterH)
H.addEventListener('mouseout', saiuH)
function enterH() {
    nome.innerText = 'Hidrogênio'
    H.style.background = 'red'
    le.innerText = 'H'
    si.innerText = 'H'
    na.innerText = '1'
    ma.innerText = '1.008'
    ce.innerText = '1s¹'
    
}
function saiuH() {
    nome.innerText = 'Tabela periódica'
    H.style.background = 'green'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '

}

//Hélio
h.addEventListener('mouseenter', enterh)
h.addEventListener('mouseout', saiuh)
function enterh() {
    nome.innerText = 'Hélio'
    h.style.background = 'red'
    le.innerText = 'He'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuh() {
    nome.innerText = 'Tabela periódica'
    h.style.background = 'rgb(76, 144, 252)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Lítio
Li.addEventListener('mouseenter', enterLi)
Li.addEventListener('mouseout', saiuLi)
function enterLi() {
    nome.innerText = 'Lítio'
    Li.style.background = 'red'
    le.innerText = 'Li'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuLi() {
    nome.innerText = 'Tabela periódica'
    Li.style.background = 'orange'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Berílio
Be.addEventListener('mouseenter', enterBe)
Be.addEventListener('mouseout', saiuBe)
function enterBe() {
    nome.innerText = 'Berílio'
    Be.style.background = 'red'
    le.innerText = 'Be'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuBe() {
    nome.innerText = 'Tabela periódica'
    Be.style.background = 'yellow'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Boro
B.addEventListener('mouseenter', enterB)
B.addEventListener('mouseout', saiuB)
function enterB() {
    nome.innerText = 'Boro'
    B.style.background = 'red'
    le.innerText = 'B'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuB() {
    nome.innerText = 'Tabela periódica'
    B.style.background = 'rgb(84, 169, 170)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Carbono
C.addEventListener('mouseenter', enterC)
C.addEventListener('mouseout', saiuC)
function enterC() {
    nome.innerText = 'Carbono'
    C.style.background = 'red'
    le.innerText = 'C'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuC() {
    nome.innerText = 'Tabela periódica'
    C.style.background = 'lightgreen'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Nitrogênio
N.addEventListener('mouseenter', enterN)
N.addEventListener('mouseout', saiuN)
function enterN() {
    nome.innerText = 'Nitrogênio'
    N.style.background = 'red'
    le.innerText = 'N'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuN() {
    nome.innerText = 'Tabela periódica'
    N.style.background = 'lightgreen'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Oxigênio
O.addEventListener('mouseenter', enterO)
O.addEventListener('mouseout', saiuO)
function enterO() {
    nome.innerText = 'Oxigênio'
    O.style.background = 'red'
    le.innerText = 'O'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuO() {
    nome.innerText = 'Tabela periódica'
    O.style.background = 'lightgreen'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Flúor
F.addEventListener('mouseenter', enterF)
F.addEventListener('mouseout', saiuF)
function enterF() {
    nome.innerText = 'Flúor'
    F.style.background = 'red'
    le.innerText = 'F'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuF() {
    nome.innerText = 'Tabela periódica'
    F.style.background = 'lightblue'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Néon
Ne.addEventListener('mouseenter', enterNe)
Ne.addEventListener('mouseout', saiuNe)
function enterNe() {
    nome.innerText = 'Néon'
    Ne.style.background = 'red'
    le.innerText = 'Ne'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuNe() {

    nome.innerText = 'Tabela periódica'
    Ne.style.background = 'rgb(76, 144, 252)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Sódio
Na.addEventListener('mouseenter', enterNa)
Na.addEventListener('mouseout', saiuNa)
function enterNa() {
    nome.innerText = 'Sódio'
    Na.style.background = 'red'
    le.innerText = 'Na'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuNa() {
    nome.innerText = 'Tabela periódica'
    Na.style.background = 'orange'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Magnésio
Mg.addEventListener('mouseenter', enterMg)
Mg.addEventListener('mouseout', saiuMg)
function enterMg() {
    nome.innerText = 'Magnésio'
    Mg.style.background = 'red'
    le.innerText = 'Mg'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuMg() {
    nome.innerText = 'Tabela periódica'
    Mg.style.background = 'yellow'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Alumínio
Al.addEventListener('mouseenter', enterAl)
Al.addEventListener('mouseout', saiuAl)
function enterAl() {
    nome.innerText = 'Alumínio'
    Al.style.background = 'red'
    le.innerText = 'Al'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuAl() {
    nome.innerText = 'Tabela periódica'
    Al.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Silício
Si.addEventListener('mouseenter', enterSi)
Si.addEventListener('mouseout', saiuSi)
function enterSi() {
    nome.innerText = 'Silício'
    Si.style.background = 'red'
    le.innerText = 'Si'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuSi() {
    nome.innerText = 'Tabela periódica'
    Si.style.background = 'rgb(84, 169, 170)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Fósforo
P.addEventListener('mouseenter', enterP)
P.addEventListener('mouseout', saiuP)
function enterP() {
    nome.innerText = 'Fósforo'
    P.style.background = 'red'
    le.innerText = 'P'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuP() {
    nome.innerText = 'Tabela periódica'
    P.style.background = 'lightgreen'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Enxofre
S.addEventListener('mouseenter', enterS)
S.addEventListener('mouseout', saiuS)
function enterS() {
    nome.innerText = 'Enxofre'
    S.style.background = 'red'
    le.innerText = 'S'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuS() {
    nome.innerText = 'Tabela periódica'
    S.style.background = 'lightgreen'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Cloro
Cl.addEventListener('mouseenter', enterCl)
Cl.addEventListener('mouseout', saiuCl)
function enterCl() {
    nome.innerText = 'Cloro'
    Cl.style.background = 'red'
    le.innerText = 'Cl'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuCl() {
    nome.innerText = 'Tabela periódica'
    Cl.style.background = 'lightblue'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Árgon
Ar.addEventListener('mouseenter', enterAr)
Ar.addEventListener('mouseout', saiuAr)
function enterAr() {
    nome.innerText = 'Árgon'
    Ar.style.background = 'red'
    le.innerText = 'Ar'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuAr() {
    nome.innerText = 'Tabela periódica'
    Ar.style.background = 'rgb(76, 144, 252)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Potássio
K.addEventListener('mouseenter', enterK)
K.addEventListener('mouseout', saiuK)
function enterK() {
    nome.innerText = 'Potássio'
    K.style.background = 'red'
    le.innerText = 'K'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuK() {
    nome.innerText = 'Tabela periódica'
    K.style.background = 'orange'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Cálcio
Ca.addEventListener('mouseenter', enterCa)
Ca.addEventListener('mouseout', saiuCa)
function enterCa() {
    nome.innerText = 'Cálcio'
    Ca.style.background = 'red'
    le.innerText = 'Ca'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuCa() {
    nome.innerText = 'Tabela periódica'
    Ca.style.background = 'yellow'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Escândio
Sc.addEventListener('mouseenter', enterSc)
Sc.addEventListener('mouseout', saiuSc)
function enterSc() {
    nome.innerText = 'Escândio'
    Sc.style.background = 'red'
    le.innerText = 'Sr'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuSc() {
    nome.innerText = 'Tabela periódica'
    Sc.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Titânio
Ti.addEventListener('mouseenter', enterTi)
Ti.addEventListener('mouseout', saiuTi)
function enterTi() {
    nome.innerText = 'Titânio'
    Ti.style.background = 'red'
    le.innerText = 'Ti'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuTi() {
    nome.innerText = 'Tabela periódica'
    Ti.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Vanádio
V.addEventListener('mouseenter', enterV)
V.addEventListener('mouseout', saiuV)
function enterV() {
    nome.innerText = 'Vanádio'
    V.style.background = 'red'
    le.innerText = 'V'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuV() {
    nome.innerText = 'Tabela periódica'
    V.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Cromo
Cr.addEventListener('mouseenter', enterCr)
Cr.addEventListener('mouseout', saiuCr)
function enterCr() {
    nome.innerText = 'Cromo'
    Cr.style.background = 'red'
    le.innerText = 'Cr'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuCr() {
    nome.innerText = 'Tabela periódica'
    Cr.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Manganês
Mn.addEventListener('mouseenter', enterMn)
Mn.addEventListener('mouseout', saiuMn)
function enterMn() {
    nome.innerText = 'Manganês'
    Mn.style.background = 'red'
    le.innerText = 'Mn'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuMn() {
    nome.innerText = 'Tabela periódica'
    Mn.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Ferro
Fe.addEventListener('mouseenter', enterFe)
Fe.addEventListener('mouseout', saiuFe)
function enterFe() {
    nome.innerText = 'Ferro'
    Fe.style.background = 'red'
    le.innerText = 'Fe'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuFe() {
    nome.innerText = 'Tabela periódica'
    Fe.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Cobalto
Co.addEventListener('mouseenter', enterCo)
Co.addEventListener('mouseout', saiuCo)
function enterCo() {
    nome.innerText = 'Cobalto'
    Co.style.background = 'red'
    le.innerText = 'Co'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuCo() {
    nome.innerText = 'Tabela periódica'
    Co.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Níquel
Ni.addEventListener('mouseenter', enterNi)
Ni.addEventListener('mouseout', saiuNi)
function enterNi() {
    nome.innerText = 'Níquel'
    Ni.style.background = 'red'
    le.innerText = 'Ni'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuNi() {
    nome.innerText = 'Tabela periódica'
    Ni.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Cobre
Cu.addEventListener('mouseenter', enterCu)
Cu.addEventListener('mouseout', saiuCu)
function enterCu() {
    nome.innerText = 'Cobre'
    Cu.style.background = 'red'
    le.innerText = 'Cu'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuCu() {
    nome.innerText = 'Tabela periódica'
    Cu.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Zinco
Zn.addEventListener('mouseenter', enterZn)
Zn.addEventListener('mouseout', saiuZn)
function enterZn() {
    nome.innerText = 'Zinco'
    Zn.style.background = 'red'
    le.innerText = 'Zn'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuZn() {
    nome.innerText = 'Tabela periódica'
    Zn.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Gálio
Ga.addEventListener('mouseenter', enterGa)
Ga.addEventListener('mouseout', saiuGa)
function enterGa() {
    nome.innerText = 'Gálio'
    Ga.style.background = 'red'
    le.innerText = 'Ga'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuGa() {
    nome.innerText = 'Tabela periódica'
    Ga.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Germânio
Ge.addEventListener('mouseenter', enterGe)
Ge.addEventListener('mouseout', saiuGe)
function enterGe() {
    nome.innerText = 'Germânio'
    Ge.style.background = 'red'
    le.innerText = 'Ge'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuGe() {
    nome.innerText = 'Tabela periódica'
    Ge.style.background = 'rgb(84, 169, 170)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Arsênio
As.addEventListener('mouseenter', enterAs)
As.addEventListener('mouseout', saiuAs)
function enterAs() {
    nome.innerText = 'Arsênio'
    As.style.background = 'red'
    le.innerText = 'As'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuAs() {
    nome.innerText = 'Tabela periódica'
    As.style.background = 'rgb(84, 169, 170)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Selênio
Se.addEventListener('mouseenter', enterSe)
Se.addEventListener('mouseout', saiuSe)
function enterSe() {
    nome.innerText = 'Selênio'
    Se.style.background = 'red'
    le.innerText = 'Se'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuSe() {
    nome.innerText = 'Tabela periódica'
    Se.style.background = 'lightgreen'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Bromo
Br.addEventListener('mouseenter', enterBr)
Br.addEventListener('mouseout', saiuBr)
function enterBr() {
    nome.innerText = 'Bromo'
    Br.style.background = 'red'
    le.innerText = 'Br'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuBr() {
    nome.innerText = 'Tabela periódica'
    Br.style.background = 'lightblue'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Crípton
Kr.addEventListener('mouseenter', enterKr)
Kr.addEventListener('mouseout', saiuKr)
function enterKr() {
    nome.innerText = 'Crípton'
    Kr.style.background = 'red'
    le.innerText = 'Kr'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuKr(){
    nome.innerText = 'Tabela periódica'
    Kr.style.background = 'rgb(76, 144, 252)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Rubídio
Rb.addEventListener('mouseenter', enterRb)
Rb.addEventListener('mouseout', saiuRb)
function enterRb() {
    nome.innerText = 'Rubídio'
    Rb.style.background = 'red'
    le.innerText = 'Rb'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuRb() {
    nome.innerText = 'Tabela periódica'
    Rb.style.background = 'orange'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Estrôncio
Sr.addEventListener('mouseenter', enterSr)
Sr.addEventListener('mouseout', saiuSr)
function enterSr() {
    nome.innerText = 'Estrôncio'
    Sr.style.background = 'red'
    le.innerText = 'Sr'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuSr() {
    nome.innerText = 'Tabela periódica'
    Sr.style.background = 'yellow'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Ítrio
Y.addEventListener('mouseenter', enterY)
Y.addEventListener('mouseout', saiuY)
function enterY() {
    nome.innerText = 'Ítrio'
    Y.style.background = 'red'
    le.innerText = 'Y'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuY() {
    nome.innerText = 'Tabela periódica'
    Y.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Zircônio
Zr.addEventListener('mouseenter', enterZr)
Zr.addEventListener('mouseout', saiuZr)
function enterZr(){
    nome.innerText = 'Zircônio'
    Zr.style.background = 'red'
    le.innerText = 'Zr'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuZr(){
    nome.innerText = 'Tabela periódica'
    Zr.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Nióbio
Nb.addEventListener('mouseenter', enterNb)
Nb.addEventListener('mouseout', saiuNb)
function enterNb() {
    nome.innerText = 'Nióbio'
    Nb.style.background = 'red'
    le.innerText = 'Nb'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuNb() {
    nome.innerText = 'Tabela periódica'
    Nb.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Molibdênio
Mo.addEventListener('mouseenter', enterMo)
Mo.addEventListener('mouseout', saiuMo)
function enterMo() {
    nome.innerText = 'Molibdênio'
    Mo.style.background = 'red'
    le.innerText = 'Mo'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuMo() {
    nome.innerText = 'Tabela periódica'
    Mo.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Tecnécio
Tc.addEventListener('mouseenter', enterTc)
Tc.addEventListener('mouseout', saiuTc)
function enterTc() {
    nome.innerText = 'Tecnécio'
    Tc.style.background = 'red'
    le.innerText = 'Tc'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuTc() {
    nome.innerText = 'Tabela periódica'
    Tc.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Rutênio
Ru.addEventListener('mouseenter', enterRu)
Ru.addEventListener('mouseout', saiuRu)
function enterRu() {
    nome.innerText = 'Rutênio'
    Ru.style.background = 'red'
    le.innerText = 'Ru'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuRu() {
    nome.innerText = 'Tabela periódica'
    Ru.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Ródio
Rh.addEventListener('mouseenter', enterRh)
Rh.addEventListener('mouseout', saiuRh)
function enterRh() {
    nome.innerText = 'Ródio'
    Rh.style.background = 'red'
    le.innerText = 'Rh'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuRh() {
    nome.innerText = 'Tabela periódica'
    Rh.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Paládio
Pd.addEventListener('mouseenter', enterPd)
Pd.addEventListener('mouseout', saiuPd)
function enterPd() {
    nome.innerText = 'Paládio'
    Pd.style.background = 'red'
    le.innerText = 'Pd'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuPd() {
    nome.innerText = 'Tabela periódica'
    Pd.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Prata
Ag.addEventListener('mouseenter', enterAg)
Ag.addEventListener('mouseout', saiuAg)
function enterAg() {
    nome.innerText = 'Prata'
    Ag.style.background = 'red'
    le.innerText = 'Ag'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuAg() {
    nome.innerText = 'Tabela periódica'
    Ag.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Cádmio
Cd.addEventListener('mouseenter', enterCd)
Cd.addEventListener('mouseout', saiuCd)
function enterCd() {
    nome.innerText = 'Cádmio'
    Cd.style.background = 'red'
    le.innerText = 'Cd'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuCd() {
    nome.innerText = 'Tabela periódica'
    Cd.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Índio
In.addEventListener('mouseenter', enterIn)
In.addEventListener('mouseout', saiuIn)
function enterIn() {
    nome.innerText = 'Índio'
    In.style.background = 'red'
    le.innerText = 'In'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuIn() {
    nome.innerText = 'Tabela periódica'
    In.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Estanho
Sn.addEventListener('mouseenter', enterSn)
Sn.addEventListener('mouseout', saiuSn)
function enterSn() {
    nome.innerText = 'Estanho'
    Sn.style.background = 'red'
    le.innerText = 'Sn'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuSn() {
    nome.innerText = 'Tabela periódica'
    Sn.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Antimônio
Sb.addEventListener('mouseenter', enterSb)
Sb.addEventListener('mouseout', saiuSb)
function enterSb() {
    nome.innerText = 'Antimônio'
    Sb.style.background = 'red'
    le.innerText = 'Sb'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuSb() {
    nome.innerText = 'Tabela periódica'
    Sb.style.background = 'rgb(84, 169, 170)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Telúrio
Te.addEventListener('mouseenter', enterTe)
Te.addEventListener('mouseout', saiuTe)
function enterTe() {
    nome.innerText = 'Telúrio'
    Te.style.background = 'red'
    le.innerText = 'Te'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuTe() {
    nome.innerText = 'Tabela periódica'
    Te.style.background = 'rgb(84, 169, 170)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Iodo
I.addEventListener('mouseenter', enterI)
I.addEventListener('mouseout', saiuI)
function enterI() {
    nome.innerText = 'Iodo'
    I.style.background = 'red'
    le.innerText = 'I'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuI() {
    nome.innerText = 'Tabela periódica'
    I.style.background = 'lightblue'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Xenônio
Xe.addEventListener('mouseenter', enterXe)
Xe.addEventListener('mouseout', saiuXe)
function enterXe() {
    nome.innerText = 'Xenônio'
    Xe.style.background = 'red'
    le.innerText = 'Xe'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

function saiuXe() {
    nome.innerText = 'Tabela periódica'
    Xe.style.background = 'rgb(76, 144, 252)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Césio
Cs.addEventListener('mouseenter', enterCs)
Cs.addEventListener('mouseout', saiuCs)
function enterCs() {
    nome.innerText = 'Césio'
    Cs.style.background = 'red'
    le.innerText = 'Cs'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuCs() {
    nome.innerText = 'Tabela periódica'
    Cs.style.background = 'orange'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Bário
Ba.addEventListener('mouseenter', enterBa)
Ba.addEventListener('mouseout', saiuBa)
function enterBa() {
    nome.innerText = 'Bário'
    Ba.style.background = 'red'
    le.innerText = 'Ba'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuBa() {
    nome.innerText = 'Tabela periódica'
    Ba.style.background = 'yellow'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Lutécio
Lu.addEventListener('mouseenter', enterLu)
Lu.addEventListener('mouseout', saiuLu)
function enterLu() {
    nome.innerText = 'Lutécio'
    Lu.style.background = 'red'
    le.innerText = 'Lu'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuLu() {
    nome.innerText = 'Tabela periódica'
    Lu.style.background = 'rgb(157, 157, 245)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Háfnio
Hf.addEventListener('mouseenter', enterHf)
Hf.addEventListener('mouseout', saiuHf)
function enterHf() {
    nome.innerText = 'Háfnio'
    Hf.style.background = 'red'
    le.innerText = 'Hf'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuHf() {
    nome.innerText = 'Tabela periódica'
    Hf.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Tântalo
Ta.addEventListener('mouseenter', enterTa)
Ta.addEventListener('mouseout', saiuTa)
function enterTa() {
    nome.innerText = 'Tântalo'
    Ta.style.background = 'red'
    le.innerText = 'Ta'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuTa() {
    nome.innerText = 'Tabela periódica'
    Ta.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Tungstênio
W.addEventListener('mouseenter', enterW)
W.addEventListener('mouseout', saiuW)
function enterW() {
    nome.innerText = 'Tungstênio'
    W.style.background = 'red'
    le.innerText = 'W'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuW() {
    nome.innerText = 'Tabela periódica'
    W.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Rênio
Re.addEventListener('mouseenter', enterRe)
Re.addEventListener('mouseout', saiuRe)
function enterRe() {
    nome.innerText = 'Rênio'
    Re.style.background = 'red'
    le.innerText = 'Re'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuRe() {
    nome.innerText = 'Tabela periódica'
    Re.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Ósmio
Os.addEventListener('mouseenter', enterOs)
Os.addEventListener('mouseout', saiuOs)
function enterOs() {
    nome.innerText = 'Ósmio'
    Os.style.background = 'red'
    le.innerText = 'Os'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuOs() {
    nome.innerText = 'Tabela periódica'
    Os.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Irídio
Ir.addEventListener('mouseenter', enterIr)
Ir.addEventListener('mouseout', saiuIr)
function enterIr() {
    nome.innerText = 'Irídio'
    Ir.style.background = 'red'
    le.innerText = 'Ir'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuIr() {
    nome.innerText = 'Tabela periódica'
    Ir.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Platina
Pt.addEventListener('mouseenter', enterPt)
Pt.addEventListener('mouseout', saiuPt)
function enterPt() {
    nome.innerText = 'Platina'
    Pt.style.background = 'red'
    le.innerText = 'Pt'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuPt() {
    nome.innerText = 'Tabela periódica'
    Pt.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Ouro
Au.addEventListener('mouseenter', enterAu)
Au.addEventListener('mouseout', saiuAu)
function enterAu() {
    nome.innerText = 'Ouro'
    Au.style.background = 'red'
    le.innerText = 'Au'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuAu() {
    nome.innerText = 'Tabela periódica'
    Au.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Mercúrio
Hg.addEventListener('mouseenter', enterHg)
Hg.addEventListener('mouseout', saiuHg)
function enterHg() {
    nome.innerText = 'Mercúrio'
    Hg.style.background = 'red'
    le.innerText = 'Hg'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuHg() {
    nome.innerText = 'Tabela periódica'
    Hg.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Tálio
Tl.addEventListener('mouseenter', enterTl)
Tl.addEventListener('mouseout', saiuTl)
function enterTl() {
    nome.innerText = 'Tálio'
    Tl.style.background = 'red'
    le.innerText = 'Tl'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuTl() {
    nome.innerText = 'Tabela periódica'
    Tl.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Chumbo
Pb.addEventListener('mouseenter', enterPb)
Pb.addEventListener('mouseout', saiuPb)
function enterPb() {
    nome.innerText = 'Chumbo'
    Pb.style.background = 'red'
    le.innerText = 'Pb'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuPb() {
    nome.innerText = 'Tabela periódica'
    Pb.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Bismuto
Bi.addEventListener('mouseenter', enterBi)
Bi.addEventListener('mouseout', saiuBi)
function enterBi() {
    nome.innerText = 'Bismuto'
    Bi.style.background = 'red'
    le.innerText = 'Bi'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuBi() {
    nome.innerText = 'Tabela periódica'
    Bi.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Polônio
Po.addEventListener('mouseenter', enterPo)
Po.addEventListener('mouseout', saiuPo)
function enterPo() {
    nome.innerText = 'Polônio'
    Po.style.background = 'red'
    le.innerText = 'Po'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuPo() {
    nome.innerText = 'Tabela periódica'
    Po.style.background = 'rgb(84, 169, 170)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Ástato
At.addEventListener('mouseenter', enterAt)
At.addEventListener('mouseout', saiuAt)
function enterAt() {
    nome.innerText = 'Ástato'
    At.style.background = 'red'
    le.innerText = 'At'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuAt() {
    nome.innerText = 'Tabela periódica'
    At.style.background = 'lightblue'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Radônio
Rn.addEventListener('mouseenter', enterRn)
Rn.addEventListener('mouseout', saiuRn)
function enterRn() {
    nome.innerText = 'Radônio'
    Rn.style.background = 'red'
    le.innerText = 'Rn'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuRn() {
    nome.innerText = 'Tabela periódica'
    Rn.style.background = 'rgb(76, 144, 252)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Frâncio
Fr.addEventListener('mouseenter', enterFr)
Fr.addEventListener('mouseout', saiuFr)
function enterFr() {
    nome.innerText = 'Frâncio'
    Fr.style.background = 'red'
    le.innerText = 'Fr'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuFr() {
    nome.innerText = 'Tabela periódica'
    Fr.style.background = 'orange'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Rádio
Ra.addEventListener('mouseenter', enterRa)
Ra.addEventListener('mouseout', saiuRa)
function enterRa() {
    nome.innerText = 'Rádio'
    Ra.style.background = 'red'
    le.innerText = 'Ra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuRa() {
    nome.innerText = 'Tabela periódica'
    Ra.style.background = 'yellow'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Laurêncio
Lr.addEventListener('mouseenter', enterLr)
Lr.addEventListener('mouseout', saiuLr)
function enterLr() {
    nome.innerText = 'Laurêncio'
    Lr.style.background = 'red'
    le.innerText = 'Lr'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuLr() {
    nome.innerText = 'Tabela periódica'
    Lr.style.background = 'rgb(138, 86, 138)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Rutherfórdio
Rf.addEventListener('mouseenter', enterRf)
Rf.addEventListener('mouseout', saiuRf)
function enterRf() {
    nome.innerText = 'Rutherfórdio'
    Rf.style.background = 'red'
    le.innerText = 'Rf'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuRf() {
    nome.innerText = 'Tabela periódica'
    Rf.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Dúbnio
Db.addEventListener('mouseenter', enterDb)
Db.addEventListener('mouseout', saiuDb)
function enterDb() {
    nome.innerText = 'Dúbnio'
    Db.style.background = 'red'
    le.innerText = 'Db'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuDb() {
    nome.innerText = 'Tabela periódica'
    Db.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Seabórgio
Sg.addEventListener('mouseenter', enterSg)
Sg.addEventListener('mouseout', saiuSg)
function enterSg() {
    nome.innerText = 'Seabórgio'
    Sg.style.background = 'red'
    le.innerText = 'Sg'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuSg() {
    nome.innerText = 'Tabela periódica'
    Sg.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Bóhrio
Bh.addEventListener('mouseenter', enterBh)
Bh.addEventListener('mouseout', saiuBh)
function enterBh() {
    nome.innerText = 'Bóhrio'
    Bh.style.background = 'red'
    le.innerText = 'Bh' 
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuBh() {
    nome.innerText = 'Tabela periódica'
    Bh.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Hássio
Hs.addEventListener('mouseenter', enterHs)
Hs.addEventListener('mouseout', saiuHs)
function enterHs() {
    nome.innerText = 'Hássio'
    Hs.style.background = 'red'
    le.innerText = 'Hs'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuHs() {
    nome.innerText = 'Tabela periódica'
    Hs.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Meitnério
Mt.addEventListener('mouseenter', enterMt)
Mt.addEventListener('mouseout', saiuMt)
function enterMt() {
    nome.innerText = 'Meitnério'
    Mt.style.background = 'red'
    le.innerText = 'Mt'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuMt() {
    nome.innerText = 'Tabela periódica'
    Mt.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Darmstádtio
Ds.addEventListener('mouseenter', enterDs)
Ds.addEventListener('mouseout', saiuDs)
function enterDs() {
    nome.innerText = 'Darmstádtio'
    Ds.style.background = 'red'
    le.innerText = 'Ds'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuDs() {
    nome.innerText = 'Tabela periódica'
    Ds.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Roentgênio
Rg.addEventListener('mouseenter', enterRg)
Rg.addEventListener('mouseout', saiuRg)
function enterRg() {
    nome.innerText = 'Roentgênio'
    Rg.style.background = 'red'
    le.innerText = 'Rg'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuRg() {
    nome.innerText = 'Tabela periódica'
    Rg.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Copernício
Cn.addEventListener('mouseenter', enterCn)
Cn.addEventListener('mouseout', saiuCn)
function enterCn() {
    nome.innerText = 'Copernício'
    Cn.style.background = 'red'
    le.innerText = 'Cn'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuCn() {
    nome.innerText = 'Tabela periódica'
    Cn.style.background = 'pink'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Nihônio
Nh.addEventListener('mouseenter', enterNh)
Nh.addEventListener('mouseout', saiuNh)
function enterNh() {
    nome.innerText = 'Nihônio'
    Nh.style.background = 'red'
    le.innerText = 'Nh'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuNh() {
    nome.innerText = 'Tabela periódica'
    Nh.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Fleróvio
Fl.addEventListener('mouseenter', enterFl)
Fl.addEventListener('mouseout', saiuFl)
function enterFl() {
    nome.innerText = 'Fleróvio'
    Fl.style.background = 'red'
    le.innerText = 'Fl'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuFl() {
    nome.innerText = 'Tabela periódica'
    Fl.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Moscóvio
Mc.addEventListener('mouseenter', enterMc)
Mc.addEventListener('mouseout', saiuMc)
function enterMc() {
    nome.innerText = 'Moscóvio'
    Mc.style.background = 'red'
    le.innerText = 'Mc'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuMc() {
    nome.innerText = 'Tabela periódica'
    Mc.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Livermório
Lv.addEventListener('mouseenter', enterLv)
Lv.addEventListener('mouseout', saiuLv)
function enterLv() {
    nome.innerText = 'Livermório'
    Lv.style.background = 'red'
    le.innerText = 'Lv'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuLv() {
    nome.innerText = 'Tabela periódica'
    Lv.style.background = 'rgb(84, 103, 148)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Tennesso
Ts.addEventListener('mouseenter', enterTs)
Ts.addEventListener('mouseout', saiuTs)
function enterTs() {
    nome.innerText = 'Tennesso'
    Ts.style.background = 'red'
    le.innerText = 'Ts'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuTs() {
    nome.innerText = 'Tabela periódica'
    Ts.style.background = 'lightblue'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}

//Oganessônio
Og.addEventListener('mouseenter', enterOg)
Og.addEventListener('mouseout', saiuOg)
function enterOg() {
    nome.innerText = 'Oganessônio'
    Og.style.background = 'red'
    le.innerText = 'Og'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}
function saiuOg() {
    nome.innerText = 'Tabela periódica'
    Og.style.background = 'rgb(76, 144, 252)'
    le.innerText = 'Letra'
    si.innerText = ' '
    na.innerText = ' '
    ma.innerText = ' '
    ce.innerText = ' '
}