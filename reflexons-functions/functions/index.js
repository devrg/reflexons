const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.sendEmailConfirmation = functions.database
  .ref("/registrations/{uid}")
  .onWrite(change => {
    const snapshot = change.after;
    const val = snapshot.val();

    console.log(val);

    let mailOptions = {
      from: '"The Reflexons Team" <reflexons.2019@gmail.com>',
      to: val.email,
      subject: val.event + " Registration Confirmation",
      text: "Thanks for registering for " + val.event + " at Reflexons 2019!",
      html: getHTMLContent(val.name, val.event)
    };

    if (val.event === "Photography") {
      mailOptions.attachments = [
        {
          filename: "Photography Rules and Regulations.pdf",
          path:
            "https://firebasestorage.googleapis.com/v0/b/reflexons-2019.appspot.com/o/PhotographyEventDetails.pdf?alt=media&token=004a3935-3b0d-47e0-871e-b176e5ce2e66"
        }
      ];
    }

    mailTransport.sendMail(mailOptions).then((res, err) => {
      if (err) {
        console.log("Email failed to be sent for " + val.email);
        console.log(val);
        console.log(err);
      } else {
        console.log("Email sent for " + val.email);
        console.log(val);
      }
    });

    return null;
  });

const getHTMLContent = (name, event) => `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Thanks for registering for Code Combat!</title>
    <style>
      @media only screen and (max-width: 620px) {
        table[class="body"] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table[class="body"] p,
        table[class="body"] ul,
        table[class="body"] ol,
        table[class="body"] td,
        table[class="body"] span,
        table[class="body"] a {
          font-size: 16px !important;
        }
        table[class="body"] .wrapper,
        table[class="body"] .article {
          padding: 10px !important;
        }
        table[class="body"] .content {
          padding: 0 !important;
        }
        table[class="body"] .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table[class="body"] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table[class="body"] .btn table {
          width: 100% !important;
        }
        table[class="body"] .btn a {
          width: 100% !important;
        }
        table[class="body"] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
      /* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
        .btn-primary table td:hover {
          background-color: #34495e !important;
        }
        .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important;
        }
      }
    </style>
  </head>
  <body
    class=""
    style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
      style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;"
    >
      <tr>
        <td
          style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
        >
          &nbsp;
        </td>
        <td
          class="container"
          style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;"
        >
          <div
            class="content"
            style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;"
          >
            <!-- START CENTERED WHITE CONTAINER -->
            <span
              class="preheader"
              style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"
              >Event Registration Confirmation</span
            >
            <table
              class="main"
              style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;"
            >
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td
                  class="wrapper"
                  style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;"
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                  >
                    <tr>
                      <td
                        style="margin-bottom: 20px; display: flex; flex-direction: column; justify-content: center; align-items: center;"
                      >
                        <a href="https://reflexons.cucse.org" target="_blank"
                          ><img
                            width="50px"
                            src="https://reflexons.cucse.org/static/504396c60f29f54ac5a3db4e899899a1/3e547/logo.png"/></a
                        ><span style="font-size: 20px;">Reflexons 2019</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
                      >
                        <p
                          style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"
                        >
                          <b>${
                            event === "Photography"
                              ? "NOTE: The attached file contains rules & regulations for this event"
                              : ""
                          }
                          </b>
                        </p>
                        <p
                          style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"
                        >
                          Hi ${name},
                        </p>
                        <p
                          style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"
                        >
                          This is just to confirm that we have received your
                          application for ${event}. Thank you for choosing
                          to be a part of Reflexons 2019.
                        </p>
                        <p
                          style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"
                        >
                          We will get back to you very soon!
                        </p>
                        <p
                          style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"
                        >
                          In the meantime, stay connected to us via
                          <a
                            href="https://www.facebook.com/pg/ReflexonsCU-384052642413499/"
                            target="_blank"
                            >Facebook</a
                          >,
                          <a href="https://www.instagram.com/reflexons.2019/" target="_blank">
                            Instagram
                          </a>
                          and
                          <a href="https://reflexons.cucse.org" target="_blank"
                            >Reflexons 2019</a
                          >
                        </p>
                        <p
                          style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"
                        >
                          Thanks again!
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div
              class="footer"
              style="clear: both; Margin-top: 10px; text-align: center; width: 100%;"
            >
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
              >
                <tr>
                  <td
                    class="content-block"
                    style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;"
                  >
                    <span
                      class="apple-link"
                      style="color: #505050; font-size: 12px; text-align: center;"
                      >Reflexons 2019<br />Annual tech fest and reunion of the
                      Department of Computer Science at the University of
                      Calcutta</span
                    ><br /><br />
                    <span
                      class="apple-link"
                      style="color: #505050; font-size: 12px; text-align: center;"
                      ><a
                        href="https://reflexons.cucse.org/#section-4"
                        target="_blank"
                        >(Block) JD-2, Salt Lake City, Sector 3, Kolkata -
                        700106</a
                      >
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

            <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td
          style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
        >
          &nbsp;
        </td>
      </tr>
    </table>
  </body>
</html>
`;
