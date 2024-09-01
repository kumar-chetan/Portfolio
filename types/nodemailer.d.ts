declare module 'nodemailer' {
    import { Transporter } from 'nodemailer';
  
    interface TransportOptions {
      host?: string;
      port?: number;
      secure?: boolean;
      auth?: {
        user: string;
        pass: string;
      };
    }
  
    export function createTransport(options: TransportOptions): Transporter;
    export default nodemailer;
  }
  