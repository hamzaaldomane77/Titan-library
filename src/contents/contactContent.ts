export interface ContactInfo {
  email: string
  phone: string
  address: string
  workingHours: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface ContactContent {
  intro: {
    title: string
    subtitle: string
    description: string
  }
  contactInfo: {
    title: string
    subtitle: string
    info: ContactInfo
  }
  form: {
    title: string
    subtitle: string
    fields: {
      fullName: {
        label: string
        placeholder: string
        required: boolean
      }
      email: {
        label: string
        placeholder: string
        required: boolean
      }
      phone: {
        label: string
        placeholder: string
        required: boolean
      }
      subject: {
        label: string
        placeholder: string
        required: boolean
      }
      message: {
        label: string
        placeholder: string
        required: boolean
      }
    }
    submitButton: string
    submittingButton: string
    successMessage: string
    errorMessage: string
  }
  map: {
    title: string
    subtitle: string
    address: string
  }
  social: {
    title: string
    subtitle: string
    links: SocialLink[]
  }
}

export const contactContent: ContactContent = {
  intro: {
    title: "Let's Get In Touch",
    subtitle: 'We\'d love to hear from you',
    description:
      'Have a question, suggestion, or feedback? Our team is here to help. Reach out to us through any of the channels below, and we\'ll get back to you as soon as possible.'
  },
  contactInfo: {
    title: 'Contact Information',
    subtitle: 'Get in touch with us',
    info: {
      email: 'info@titanlibrary.com',
      phone: '+1 (555) 123-4567',
      address: '123 Library Street, Knowledge City, KC 12345',
      workingHours: 'Monday - Friday: 9:00 AM - 8:00 PM'
    }
  },
  form: {
    title: 'Send Us a Message',
    subtitle: 'Fill out the form below and we\'ll respond promptly',
    fields: {
      fullName: {
        label: 'Full Name',
        placeholder: 'Enter your full name',
        required: true
      },
      email: {
        label: 'Email Address',
        placeholder: 'Enter your email address',
        required: true
      },
      phone: {
        label: 'Phone Number',
        placeholder: 'Enter your phone number (optional)',
        required: false
      },
      subject: {
        label: 'Subject',
        placeholder: 'What is this regarding?',
        required: true
      },
      message: {
        label: 'Message',
        placeholder: 'Tell us how we can help you...',
        required: true
      }
    },
    submitButton: 'Send Message',
    submittingButton: 'Sending...',
    successMessage: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
    errorMessage: 'Something went wrong. Please try again later.'
  },
  map: {
    title: 'Visit Our Location',
    subtitle: 'Find us on the map',
    address: '123 Library Street, Knowledge City, KC 12345'
  },
  social: {
    title: 'Follow Us',
    subtitle: 'Stay connected on social media',
    links: [
      {
        name: 'Facebook',
        url: 'https://facebook.com/titanlibrary',
        icon: 'facebook'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/titanlibrary',
        icon: 'instagram'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/titanlibrary',
        icon: 'twitter'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/company/titanlibrary',
        icon: 'linkedin'
      }
    ]
  }
}

