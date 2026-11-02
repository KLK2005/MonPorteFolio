# 🚀 Guide d'Installation Complet

## ✅ Prérequis

- Node.js version 18 ou supérieure
- npm ou yarn
- Un éditeur de code (VS Code recommandé)

## 📥 Installation

### 1. Installer les dépendances

```bash
npm install
```

Si vous rencontrez des erreurs, essayez :
```bash
npm install --legacy-peer-deps
```

### 2. Configuration obligatoire

#### Numéro WhatsApp

**Fichiers à modifier :**

1. `components/Hero.tsx` (ligne ~10)
```typescript
const whatsappNumber = '+221XXXXXXXXX' // Remplacez par votre numéro
```

2. `components/Pricing.tsx` (ligne ~12)
```typescript
const whatsappNumber = '+221XXXXXXXXX' // Remplacez par votre numéro
```

3. `components/Contact.tsx` (ligne ~13)
```typescript
const whatsappNumber = '+221XXXXXXXXX' // Remplacez par votre numéro
```

**Format du numéro :** `+221XXXXXXXXX` (incluez l'indicatif du pays)

#### Email de contact

**Fichier à modifier :** `components/Contact.tsx` (ligne ~14)
```typescript
const email = 'votre.email@example.com' // Remplacez par votre email
```

#### Réseaux sociaux (Optionnel)

**Fichier à modifier :** `components/Contact.tsx` (section Social Links)

Remplacez les `#` par vos liens :
```typescript
{ icon: Facebook, href: 'https://facebook.com/votreprofil', label: 'Facebook' },
{ icon: Instagram, href: 'https://instagram.com/votreprofil', label: 'Instagram' },
{ icon: Linkedin, href: 'https://linkedin.com/in/votreprofil', label: 'LinkedIn' }
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez votre navigateur sur : **http://localhost:3000**

## 🎨 Personnalisation

### Modifier les couleurs

Fichier : `tailwind.config.ts`

```typescript
colors: {
  black: '#000000',      // Couleur principale
  white: '#FFFFFF',      // Couleur de fond
  silver: {
    100: '#F5F5F5',     // Argent très clair
    200: '#E8E8E8',
    300: '#D4D4D4',
    400: '#A8A8A8',
    500: '#808080',
    600: '#666666',     // Argent foncé
  }
}
```

### Modifier les textes

Chaque section est dans son propre fichier de composant :

- **Hero (Accueil)** : `components/Hero.tsx`
  - Titre principal
  - Sous-titre
  - Bouton d'appel à l'action

- **About (À propos)** : `components/About.tsx`
  - Présentation
  - Mission, Vision, Approche

- **Services** : `components/Services.tsx`
  - Liste des 5 services
  - Descriptions et fonctionnalités

- **Projects (Projets)** : `components/Projects.tsx`
  - 3 projets de démonstration
  - Images et descriptions

- **Pricing (Tarifs)** : `components/Pricing.tsx`
  - 3 formules commerciales
  - Prix et fonctionnalités incluses

- **Contact** : `components/Contact.tsx`
  - Formulaire de contact
  - Coordonnées

### Modifier les images des projets

**Fichier :** `components/Projects.tsx`

#### Option 1 : Utiliser vos propres images

1. Placez vos images dans le dossier `public/images/`
2. Modifiez les chemins dans Projects.tsx :
```typescript
image: '/images/votre-image.jpg'
```

#### Option 2 : Garder Unsplash (temporaire)

Les images actuelles proviennent d'Unsplash et sont temporaires pour la démonstration.

### Ajouter plus de projets

Dans `components/Projects.tsx`, dupliquez un objet dans le tableau `projects` :

```typescript
{
  title: 'Nom du Projet',
  category: 'Type',
  description: 'Description du projet...',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  image: '/images/projet.jpg',
  link: '#'
}
```

### Modifier les tarifs

Dans `components/Pricing.tsx`, modifiez le tableau `plans` :

```typescript
{
  name: 'NOM FORMULE',
  price: '50 000',
  subtitle: 'Pour qui',
  description: 'Description courte',
  features: [
    'Fonctionnalité 1',
    'Fonctionnalité 2',
    // ...
  ],
  delay: '4 à 7 jours',
  popular: true, // pour l'afficher en avant
  formule: 'Business'
}
```

## 🏗️ Build de production

Pour créer une version optimisée :

```bash
npm run build
```

Pour tester la version de production localement :

```bash
npm run start
```

## 🚀 Déploiement sur Vercel (Recommandé - Gratuit)

### Méthode 1 : Via GitHub (Automatique)

1. Créez un repository GitHub pour votre projet
2. Poussez votre code sur GitHub :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-username/votre-repo.git
git push -u origin main
```

3. Allez sur [vercel.com](https://vercel.com)
4. Connectez-vous avec GitHub
5. Cliquez sur "New Project"
6. Importez votre repository
7. Cliquez sur "Deploy"

### Méthode 2 : Via Vercel CLI

1. Installez Vercel CLI :
```bash
npm install -g vercel
```

2. Déployez :
```bash
vercel
```

3. Suivez les instructions dans le terminal

Votre site sera en ligne en quelques minutes avec une URL gratuite !

## 📱 Test responsive

Testez votre site sur différentes tailles d'écran :

- **Mobile** : 375px, 414px
- **Tablette** : 768px, 1024px
- **Desktop** : 1280px, 1920px

Utilisez les DevTools de Chrome (F12) pour tester.

## ❓ Problèmes courants

### L'installation échoue

**Solution 1 :**
```bash
npm cache clean --force
npm install
```

**Solution 2 :**
```bash
npm install --legacy-peer-deps
```

### Erreur "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Le site ne démarre pas

1. Vérifiez que le port 3000 n'est pas utilisé
2. Essayez un autre port :
```bash
npm run dev -- -p 3001
```

### Erreurs TypeScript

Construisez le projet pour voir les erreurs détaillées :
```bash
npm run build
```

### WhatsApp ne fonctionne pas

- Vérifiez le format du numéro : `+221XXXXXXXXX`
- Assurez-vous d'avoir remplacé les X par votre vrai numéro
- Testez le lien manuellement : `https://wa.me/221XXXXXXXXX`

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

## 💡 Conseils

1. **Testez sur mobile** - La majorité des visiteurs seront sur mobile
2. **Optimisez les images** - Utilisez des formats WebP et compressez vos images
3. **SEO** - Modifiez les métadonnées dans `app/layout.tsx`
4. **Performance** - Utilisez Google PageSpeed Insights pour tester
5. **Analytics** - Ajoutez Google Analytics pour suivre vos visiteurs

## 🔐 Sécurité

- Ne commitez jamais vos vraies informations sensibles
- Utilisez des variables d'environnement pour les données sensibles
- Gardez vos dépendances à jour : `npm update`

## 🆘 Support

Si vous rencontrez des problèmes non résolus ici :

1. Vérifiez les issues GitHub de Next.js
2. Consultez la documentation officielle
3. Contactez-moi via WhatsApp ou email (après configuration)

---

**Bonne chance avec votre nouveau site portfolio ! 🎉**
