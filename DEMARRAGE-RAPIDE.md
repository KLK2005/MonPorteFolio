# 🚀 Démarrage Rapide - 5 Minutes

## Étape 1 : Ouvrir le Terminal
Ouvrez un terminal dans le dossier `portfolio-dev`

## Étape 2 : Installer (si nécessaire)
```bash
npm install
```
⏱️ *Prend 2-3 minutes*

## Étape 3 : Configuration Minimale

### A. WhatsApp (OBLIGATOIRE)
Remplacez dans ces 3 fichiers : `+221XXXXXXXXX` par votre numéro

1. `components/Hero.tsx` - ligne 10
2. `components/Pricing.tsx` - ligne 12  
3. `components/Contact.tsx` - ligne 13

**Format :** `+221771234567` (avec indicatif pays)

### B. Email (OBLIGATOIRE)
Dans `components/Contact.tsx` - ligne 14
```typescript
const email = 'votre.email@gmail.com'
```

## Étape 4 : Lancer le Site
```bash
npm run dev
```

## Étape 5 : Ouvrir le Navigateur
http://localhost:3000

---

## ✅ C'est prêt !

Votre site fonctionne maintenant en local.

## 📝 Prochaines Étapes

1. **Personnaliser le contenu** → Voir `PERSONNALISATION.md`
2. **Modifier les couleurs** → `tailwind.config.ts`
3. **Ajouter vos projets** → `components/Projects.tsx`
4. **Déployer en ligne** → Voir `INSTALLATION.md` section Vercel

## 🆘 Problème ?

### Le site ne démarre pas
```bash
npm run dev -- -p 3001
```

### Erreur d'installation
```bash
npm install --legacy-peer-deps
```

### Port 3000 occupé
Le site utilisera automatiquement le port 3001

---

## 🎯 Fichiers à Modifier en Priorité

| Fichier | À faire |
|---------|---------|
| `components/Hero.tsx` | WhatsApp + Titre |
| `components/Contact.tsx` | WhatsApp + Email |
| `components/Pricing.tsx` | WhatsApp + Prix |
| `components/About.tsx` | Votre présentation |
| `components/Navbar.tsx` | Nom de votre site |

---

**Besoin de plus de détails ?**
- Installation complète → `INSTALLATION.md`
- Personnalisation → `PERSONNALISATION.md`
- Documentation → `README.md`

**Bon développement ! 🎉**
