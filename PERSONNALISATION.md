# 🎨 Guide de Personnalisation Rapide

## 🔧 Modifications Essentielles (À faire en premier)

### 1. Coordonnées de contact

| Fichier | Ligne | À remplacer |
|---------|-------|-------------|
| `components/Hero.tsx` | ~10 | `const whatsappNumber = '+221XXXXXXXXX'` |
| `components/Pricing.tsx` | ~12 | `const whatsappNumber = '+221XXXXXXXXX'` |
| `components/Contact.tsx` | ~13-14 | WhatsApp + Email |

**Exemple :**
```typescript
const whatsappNumber = '+221771234567'
const email = 'jean.dupont@gmail.com'
```

### 2. Nom du site / Branding

**Fichier :** `components/Navbar.tsx` (ligne ~40)
```typescript
<motion.a href="#accueil" className="text-xl md:text-2xl font-bold text-white">
  VotreNom<span className="text-silver-300">Web</span>
</motion.a>
```

**Fichier :** `components/Footer.tsx` (ligne ~18)
```typescript
<span className="text-2xl font-bold">
  VotreNom<span className="text-silver-300">Web</span>
</span>
```

### 3. Métadonnées SEO

**Fichier :** `app/layout.tsx` (lignes 10-13)
```typescript
export const metadata: Metadata = {
  title: 'Votre Nom - Développeur Web Freelance',
  description: 'Votre description personnalisée ici...',
}
```

## 💬 Personnalisation du Contenu

### Section Hero (Accueil)

**Fichier :** `components/Hero.tsx`

```typescript
// Titre principal (ligne ~35)
<h1>Je transforme vos idées en expériences web</h1>

// Sous-titre (ligne ~44)
<p>Votre description personnalisée...</p>

// Bouton CTA (ligne ~55)
Discutons de votre projet
```

### Section À Propos

**Fichier :** `components/About.tsx`

```typescript
// Présentation principale (lignes ~45-52)
<p className="text-lg md:text-xl text-white leading-relaxed mb-6">
  Présentez-vous en quelques lignes...
</p>

// Mission, Vision, Approche (lignes 58-76)
{
  icon: Target,
  title: 'Ma Mission',
  desc: 'Votre mission...'
}
```

### Section Services

**Fichier :** `components/Services.tsx`

Modifiez le tableau `services` (lignes 13-47) :

```typescript
{
  icon: Globe,
  title: 'Nom du Service',
  description: 'Description du service...',
  features: ['Point 1', 'Point 2', 'Point 3', 'Point 4']
}
```

**Icônes disponibles :**
- `Globe` - Sites web
- `Megaphone` - Marketing
- `ShoppingCart` - E-commerce
- `Building2` - Entreprises
- `RefreshCw` - Refonte
- `Code2` - Développement
- `Palette` - Design
- `Zap` - Performance

### Section Projets

**Fichier :** `components/Projects.tsx`

#### Modifier les projets existants (lignes 13-43)

```typescript
{
  title: 'Nom du Projet',
  category: 'Type de Site',
  description: 'Description du projet...',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  image: '/images/votre-image.jpg', // ou URL Unsplash
  link: '#' // ou URL réelle du projet
}
```

#### Ajouter un nouveau projet

Copiez un objet existant dans le tableau et modifiez-le.

#### Images gratuites recommandées

- [Unsplash](https://unsplash.com) - Photos haute qualité
- [Pexels](https://pexels.com) - Images gratuites
- [Pixabay](https://pixabay.com) - Images libres de droits

### Section Tarifs

**Fichier :** `components/Pricing.tsx`

#### Modifier les prix (lignes 18-84)

```typescript
{
  name: 'NOM FORMULE',
  price: '50 000', // Sans FCFA, juste le nombre
  subtitle: 'Pour qui cette formule',
  description: 'Description courte',
  features: [
    'Fonctionnalité incluse 1',
    'Fonctionnalité incluse 2',
    // Ajoutez autant que nécessaire
  ],
  delay: '4 à 7 jours',
  popular: true, // true pour badge "POPULAIRE"
  formule: 'Business' // Nom pour WhatsApp
}
```

#### Mettre une formule en avant

Ajoutez `popular: true` à la formule que vous voulez mettre en avant.

### Section Contact

**Fichier :** `components/Contact.tsx`

#### Message d'introduction (lignes 56-61)
```typescript
<p className="text-silver-200 mb-8 leading-relaxed">
  Votre message d'introduction personnalisé...
</p>
```

#### Liens réseaux sociaux (lignes 92-94)
```typescript
{ icon: Facebook, href: 'https://facebook.com/votreprofil', label: 'Facebook' },
{ icon: Instagram, href: 'https://instagram.com/votreprofil', label: 'Instagram' },
{ icon: Linkedin, href: 'https://linkedin.com/in/votreprofil', label: 'LinkedIn' }
```

## 🎨 Personnalisation Visuelle

### Changer les couleurs principales

**Fichier :** `tailwind.config.ts`

```typescript
colors: {
  // Changer la couleur principale
  black: '#000000',    // Votre couleur principale
  white: '#FFFFFF',
  
  // Changer les tons argentés
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

**Exemples de palettes alternatives :**

#### Bleu professionnel
```typescript
colors: {
  primary: '#1E3A8A',      // Bleu foncé
  secondary: '#3B82F6',     // Bleu clair
  accent: '#60A5FA',        // Bleu accent
}
```

#### Vert moderne
```typescript
colors: {
  primary: '#065F46',      // Vert foncé
  secondary: '#10B981',     // Vert
  accent: '#34D399',        // Vert clair
}
```

#### Violet créatif
```typescript
colors: {
  primary: '#5B21B6',      // Violet foncé
  secondary: '#8B5CF6',     // Violet
  accent: '#A78BFA',        // Violet clair
}
```

### Changer la police de caractères

**Fichier :** `app/layout.tsx`

```typescript
import { Inter, Poppins, Roboto } from 'next/font/google'

// Remplacez Inter par votre choix
const font = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-main',
})
```

**Polices recommandées :**
- `Inter` - Moderne et lisible (par défaut)
- `Poppins` - Arrondie et friendly
- `Roboto` - Classique et professionnelle
- `Montserrat` - Géométrique et élégante
- `Open Sans` - Neutre et polyvalente

### Modifier les animations

**Fichier :** `app/globals.css`

```css
/* Changer la vitesse du float */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); } /* Modifiez -20px */
}

.animate-float {
  animation: float 6s ease-in-out infinite; /* Modifiez 6s */
}
```

## 📸 Gestion des Images

### Ajouter vos images

1. Créez un dossier : `public/images/`
2. Placez vos images dedans
3. Référencez-les : `/images/mon-image.jpg`

### Optimiser les images

**Formats recommandés :**
- **WebP** pour le web (meilleure compression)
- **JPG** pour les photos
- **PNG** pour les graphiques avec transparence

**Tailles recommandées :**
- **Projets** : 800x600px
- **Hero** : 1920x1080px
- **Logos** : 200x200px

**Outils de compression :**
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- [ImageOptim](https://imageoptim.com)

## 🔤 Modifier les Textes d'un Coup

### Rechercher et remplacer dans VS Code

1. Appuyez sur `Ctrl + Shift + F` (Windows) ou `Cmd + Shift + F` (Mac)
2. Cherchez le texte à remplacer
3. Remplacez dans tous les fichiers

**Exemples :**
- Remplacer `DevWeb` par votre nom
- Remplacer `+221XXXXXXXXX` par votre numéro
- Remplacer les descriptions

## 🚀 Ajouts Avancés

### Ajouter Google Analytics

**Fichier :** `app/layout.tsx`

Ajoutez avant la balise de fermeture `</body>` :

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Ajouter un favicon personnalisé

1. Créez votre favicon sur [Favicon.io](https://favicon.io)
2. Remplacez `app/favicon.ico` par votre fichier

### Ajouter un blog

Créez un nouveau dossier : `app/blog/page.tsx`

## ✅ Checklist avant de déployer

- [ ] Remplacer le numéro WhatsApp (3 fichiers)
- [ ] Remplacer l'email de contact
- [ ] Modifier le nom du site / branding
- [ ] Personnaliser les textes des sections
- [ ] Remplacer les liens des réseaux sociaux
- [ ] Ajouter vos propres images de projets
- [ ] Vérifier les tarifs et formules
- [ ] Tester sur mobile, tablette et desktop
- [ ] Tester les liens WhatsApp
- [ ] Tester le formulaire de contact
- [ ] Optimiser les images
- [ ] Vérifier les métadonnées SEO
- [ ] Tester la vitesse du site

## 🎯 Résumé des Fichiers à Modifier

| Priorité | Fichier | Ce qu'il faut modifier |
|----------|---------|------------------------|
| 🔴 Urgent | `components/Hero.tsx` | WhatsApp, Titre, Description |
| 🔴 Urgent | `components/Pricing.tsx` | WhatsApp, Tarifs |
| 🔴 Urgent | `components/Contact.tsx` | WhatsApp, Email, Réseaux |
| 🟡 Important | `components/Navbar.tsx` | Nom du site |
| 🟡 Important | `components/About.tsx` | Présentation personnelle |
| 🟡 Important | `app/layout.tsx` | Métadonnées SEO |
| 🟢 Optionnel | `components/Services.tsx` | Descriptions services |
| 🟢 Optionnel | `components/Projects.tsx` | Projets et images |
| 🟢 Optionnel | `tailwind.config.ts` | Couleurs du thème |

---

**Vous avez maintenant tout pour personnaliser votre site ! 🎉**
