import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			navy: {
  				DEFAULT: 'hsl(var(--navy))',
  				light: 'hsl(var(--navy-light))'
  			},
  			cream: {
  				DEFAULT: 'hsl(var(--cream))',
  				dark: 'hsl(var(--cream-dark))'
  			},
  			silver: {
  				DEFAULT: 'hsl(var(--silver))',
  				light: 'hsl(var(--silver-light))'
  			},
  			slate: 'hsl(var(--slate))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'2xl': '1rem',
  			'3xl': '1.5rem'
  		},
  		fontFamily: {
  			sans: [
  				'Bricolage Grotesque"',
  				'system-ui',
  				'-apple-system',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono"',
  				'ui-monospace',
  				'SFMono-Regular',
  				'Menlo',
  				'monospace'
  			]
  		},
  		fontSize: {
  			display: [
  				'4.5rem',
  				{
  					lineHeight: '1.04',
  					letterSpacing: '-0.03em',
  					fontWeight: '600'
  				}
  			],
  			'display-sm': [
  				'3.5rem',
  				{
  					lineHeight: '1.06',
  					letterSpacing: '-0.03em',
  					fontWeight: '600'
  				}
  			],
  			heading: [
  				'2.75rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.025em',
  					fontWeight: '600'
  				}
  			],
  			subheading: [
  				'1.5rem',
  				{
  					lineHeight: '1.3',
  					letterSpacing: '-0.01em',
  					fontWeight: '500'
  				}
  			],
  			'mono-label': [
  				'0.6875rem',
  				{
  					lineHeight: '1',
  					letterSpacing: '0.1em',
  					fontWeight: '500'
  				}
  			]
  		},
  		boxShadow: {
  			elegant: 'var(--shadow-elegant)',
  			card: 'var(--shadow-lg)',
  			subtle: 'var(--shadow-md)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-up': {
  				from: {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			'slide-in-right': {
  				from: {
  					opacity: '0',
  					transform: 'translateX(20px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-up': 'fade-up 0.6s ease-out forwards',
  			'fade-in': 'fade-in 0.4s ease-out forwards',
  			'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
