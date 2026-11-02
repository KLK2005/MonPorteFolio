# 📝 Fichiers à Modifier - Référence Rapide

## 🔴 URGENT - Modifications Obligatoires

### 1. WhatsApp - 3 fichiers

#### `components/Hero.tsx` - Ligne 10
```typescript
const whatsappNumber = '+221XXXXXXXXX' // ← MODIFIER ICI
```

#### `components/Pricing.tsx` - Ligne 12
```typescript
const whatsappNumber = '+221XXXXXXXXX' // ← MODIFIER ICI
```

#### `components/Contact.tsx` - Ligne 13
```typescript
const whatsappNumber = '+221XXXXXXXXX' // ← MODIFIER ICI
const email = 'votre.email@example.com' // ← ET ICI
```

**Format du numéro :** `+221771234567` (avec indicatif pays, sans espaces)

---

## 🟡 IMPORTANT - Branding

### 2. Nom du Site - 2 fichiers

#### `components/Navbar.tsx` - Ligne 40
```typescript
<motion.a href="#accueil">
  VotreNom<span className="text-silver-300">Web</span>
</motion.a>
```

#### `components/Footer.tsx` - Ligne 18
```typescript
<span className="text-2xl font-bold">
  VotreNom<span className="text-silver-300">Web</span>
</span>
```

### 3. Métadonnées SEO - 1 fichier

#### `app/layout.tsx` - Lignes 10-13
```typescript
export const metadata: Metadata = {
  title: 'Votre Nom - Développeur Web Freelance', // ← MODIFIER
  description: 'Votre description personnalisée...', // ← MODIFIER
}
```

---

## 🟢 RECOMMANDÉ - Contenu

### 4. Section Hero (Accueil)

#### `components/Hero.tsx`

**Ligne 35 - Titre principal**
```typescript
<h1>Je transforme vos idées en expériences web</h1>
```

**Ligne 44 - Sous-titre**
```typescript
<p>
  Développeur web indépendant spécialisé dans la création...
</p>
```

**Ligne 55 - Texte bouton**
```typescript
Discutons de votre projet
```

### 5. Section À Propos

#### `components/About.tsx`

**Lignes 45-52 - Présentation principale**
```typescript
<p className="text-lg md:text-xl text-white leading-relaxed mb-6">
  Je suis développeur web indépendant, passionné par...
</p>
<p className="text-lg md:text-xl text-silver-200 leading-relaxed">
  Mon objectif est simple : transformer vos idées...
</p>
```

**Lignes 58-76 - Mission, Vision, Approche**
```typescript
{
  icon: Target,
  title: 'Ma Mission',
  desc: 'Accompagner chaque client dans sa transformation digitale...'
}
```

### 6. Section Services

#### `components/Services.tsx` - Lignes 13-47

Modifier chaque service :
```typescript
{
  icon: Globe,
  title: 'Sites Vitrines',
  description: 'Présentation élégante de votre activité...',
  features: [
    'Design moderne',
    'Optimisation SEO',
    'Responsive mobile',
    'Formulaire de contact'
  ]
}
```

### 7. Section Projets

#### `components/Projects.tsx` - Lignes 13-43

**Pour chaque projet :**
```typescript
{
  title: 'Nom du Projet',
  category: 'Type',
  description: 'Description du projet...',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  image: 'URL_IMAGE ou /images/mon-image.jpg',
  link: '#' // ou URL réelle
}
```

**Pour ajouter vos images :**
1. Placez-les dans `public/images/`
2. Référencez : `image: '/images/mon-projet.jpg'`

### 8. Section Tarifs

#### `components/Pricing.tsx` - Lignes 18-84

**Pour chaque formule :**
```typescript
{
  name: 'STARTER',
  price: '25 000',
  subtitle: 'Pour indépendants et petits commerces',
  description: 'Site vitrine d\'une page professionnel',
  features: [
    'Site web d\'une page',
    'Design moderne et professionnel',
    // ... autres fonctionnalités
  ],
  delay: '2 à 4 jours',
  popular: false, // true pour badge "POPULAIRE"
  formule: 'Starter' // Nom pour message WhatsApp
}
```

### 9. Section Contact

#### `components/Contact.tsx`

**Ligne 56 - Message d'introduction**
```typescript
<p className="text-silver-200 mb-8">
  Que vous ayez besoin d'un site vitrine, d'une boutique...
</p>
```

**Lignes 92-94 - Réseaux sociaux**
```typescript
{ icon: Facebook, href: 'https://facebook.com/votreprofil', label: 'Facebook' },
{ icon: Instagram, href: 'https://instagram.com/votreprofil', label: 'Instagram' },
{ icon: Linkedin, href: 'https://linkedin.com/in/votreprofil', label: 'LinkedIn' }
```

---

## 🎨 OPTIONNEL - Apparence

### 10. Couleurs du thème

#### `tailwind.config.ts` - Lignes 11-21
```typescript
colors: {
  black: '#000000',
  white: '#FFFFFF',
  silver: {
    100: '#F5F5F5',
    200: '#E8E8E8',
    300: '#D4D4D4',
    400: '#A8A8A8',
    500: '#808080',
    600: '#666666',
  }
}
```

### 11. Police de caractères

#### `app/layout.tsx` - Ligne 4
```typescript
import { Inter } from 'next/font/google'
// Remplacez Inter par : Poppins, Roboto, Montserrat, etc.
```

---

## 📋 Checklist de Modification

Cochez au fur et à mesure :

### Obligatoire
- [ ] WhatsApp dans `Hero.tsx`
- [ ] WhatsApp dans `Pricing.tsx`
- [ ] WhatsApp dans `Contact.tsx`
- [ ] Email dans `Contact.tsx`

### Important
- [ ] Nom du site dans `Navbar.tsx`
- [ ] Nom du site dans `Footer.tsx`
- [ ] Métadonnées dans `layout.tsx`

### Recommandé
- [ ] Titre Hero
- [ ] Présentation À Propos
- [ ] Descriptions Services
- [ ] Images et infos Projets
- [ ] Prix et formules Tarifs
- [ ] Liens réseaux sociaux

### Optionnel
- [ ] Couleurs du thème
- [ ] Police de caractères
- [ ] Ajuster animations

---

## 🔍 Comment Trouver les Lignes ?

### Dans VS Code
1. Ouvrez le fichier
2. `Ctrl + G` (Windows) ou `Cmd + G` (Mac)
3. Tapez le numéro de ligne
4. Appuyez sur Entrée

### Rechercher un texte
1. `Ctrl + F` (Windows) ou `Cmd + F` (Mac)
2. Cherchez le texte mentionné
3. Modifiez directement

---

## 💾 Après Modifications

### 1. Sauvegarder
`Ctrl + S` ou `Cmd + S` sur chaque fichier modifié

### 2. Tester
```bash
npm run dev
```
Ouvrir : http://localhost:3000

### 3. Vérifier
- [ ] Les liens WhatsApp fonctionnent
- [ ] L'email est correct
- [ ] Le site s'affiche correctement
- [ ] Pas d'erreurs dans la console

---

## 🆘 Besoin d'Aide ?

### Documentation complète
- `README.md` - Tout sur le projet
- `INSTALLATION.md` - Installation et déploiement
- `PERSONNALISATION.md` - Guide détaillé
- `DEMARRAGE-RAPIDE.md` - Démarrer en 5 min

### Outils utiles
- Rechercher dans tous les fichiers : `Ctrl + Shift + F`
- Remplacer dans tous les fichiers : `Ctrl + Shift + H`
- Formater le code : `Shift + Alt + F`

---

**Bon courage pour la personnalisation ! 🚀**

*Temps estimé pour tout modifier : 30-60 minutes*
