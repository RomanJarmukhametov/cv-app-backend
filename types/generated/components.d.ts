import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAvatar extends Schema.Component {
  collectionName: 'components_components_avatars';
  info: {
    displayName: 'Avatar';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsMenuItem extends Schema.Component {
  collectionName: 'components_components_menu_items';
  info: {
    displayName: 'Menu Item';
    description: '';
  };
  attributes: {
    icon: Attribute.Enumeration<
      [
        'about',
        'education',
        'experience',
        'skills',
        'portfolio',
        'contacts',
        'feedback'
      ]
    >;
    sectionId: Attribute.Enumeration<
      [
        'about',
        'education',
        'experience',
        'skills',
        'portfolio',
        'contacts',
        'feedback'
      ]
    >;
    item: Attribute.Enumeration<
      [
        'About me',
        'Education',
        'Experience',
        'Skills',
        'Portfolio',
        'Contacts',
        'Feedback'
      ]
    >;
    name: Attribute.String;
  };
}

export interface LayoutAboutSection extends Schema.Component {
  collectionName: 'components_layout_about_sections';
  info: {
    displayName: 'About Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    sectionId: Attribute.String;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    heading: Attribute.String;
    subHeading: Attribute.Text;
    link: Attribute.Component<'components.link'>;
    avatar: Attribute.Component<'components.avatar'>;
    position: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.avatar': ComponentsAvatar;
      'components.link': ComponentsLink;
      'components.menu-item': ComponentsMenuItem;
      'layout.about-section': LayoutAboutSection;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
