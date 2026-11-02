# Portfolio Développeur Web Professionnel

Site portfolio moderne et élégant pour un développeur web indépendant, créé avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

## 🎯 Fonctionnalités

- ✨ Design moderne, élégant et minimaliste
- 🎨 Palette de couleurs professionnelle (noir, argent, blanc)
- 📱 100% responsive (mobile, tablette, desktop)
- 🎭 Animations fluides avec Framer Motion
- ⚡ Performance optimisée avec Next.js 15
- 🔧 TypeScript pour un code robuste
- 💅 Tailwind CSS pour un style moderne

## 📋 Sections

1. **Accueil** - Introduction avec appel à l'action
2. **À Propos** - Présentation de l'activité
3. **Services** - 5 services proposés
4. **Projets** - 3 projets de démonstration
5. **Tarifs** - 3 formules commerciales détaillées
6. **Contact** - Formulaire et coordonnées

## 🚀 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## ⚙️ Configuration

### 1. Numéro WhatsApp

Remplacer `+221XXXXXXXXX` par votre numéro WhatsApp dans les fichiers suivants :
- `components/Hero.tsx`
- `components/Pricing.tsx`
- `components/Contact.tsx`

Format : `+221XXXXXXXXX` (avec l'indicatif pays)

### 2. Email

Remplacer `votre.email@example.com` dans :
- `components/Contact.tsx`

### 3. Liens réseaux sociaux

Modifier les liens dans `components/Contact.tsx` :
- Facebook
- Instagram
- LinkedIn

### 4. Images des projets

Les projets utilisent actuellement des images d'Unsplash. Pour personnaliser :
- Remplacer les URLs dans `components/Projects.tsx`
- Ou ajouter vos propres images dans le dossier `public/`

## 📦 Structure du projet

```
portfolio-dev/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── Navbar.tsx          # Navigation
│   ├── Hero.tsx            # Section d'accueil
│   ├── About.tsx           # Section à propos
│   ├── Services.tsx        # Section services
│   ├── Projects.tsx        # Section projets
│   ├── Pricing.tsx         # Section tarifs
│   ├── Contact.tsx         # Section contact
│   └── Footer.tsx          # Pied de page
├── public/                 # Fichiers statiques
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Personnalisation

### Couleurs

Modifier les couleurs dans `tailwind.config.ts` :
```typescript
colors: {
  black: '#000000',
  white: '#FFFFFF',
  silver: {
    100: '#F5F5F5',
    // ... autres nuances
  }
}
```

### Animations

Les animations sont configurées dans `app/globals.css` et utilisent Framer Motion.

### Contenu

Modifier le contenu textuel directement dans les fichiers de composants.

## 🚀 Déploiement sur Vercel

1. Créer un compte sur [Vercel](https://vercel.com)
2. Installer Vercel CLI :
```bash
npm install -g vercel
```
3. Déployer :
```bash
vercel
```

Ou connecter votre repository GitHub à Vercel pour un déploiement automatique.

## 📱 Formules proposées

### STARTER - 25 000 FCFA
- Site web d'une page
- Design professionnel
- Responsive complet
- Délai : 2-4 jours

### BUSINESS - 50 000 FCFA (Populaire)
- Site vitrine jusqu'à 5 pages
- Design personnalisé
- Formulaire de contact
- Optimisation SEO
- Délai : 4-7 jours

### E-COMMERCE - 85 000 FCFA
- Boutique en ligne
- Catalogue de 20 produits
- Commande via WhatsApp
- Gestion complète
- Délai : 7-12 jours

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations
- **Lucide React** - Icônes modernes

## 📄 License

Projet personnel - Tous droits réservés

## 💡 Support

Pour toute question ou problème :
- WhatsApp : +221XXXXXXXXX
- Email : votre.email@example.com

---

Créé avec ❤️ par un développeur web passionné
