Feature: Casos de teste

    # Casos de testes mapeados

    Scenario: Creating an account 
        Given the client is at the create account page
        When the client finishes all the forms on "<phrase>"
        And the client inserted valid informations which passes the form's schemas
        Then he can click on the Continuar button to move forward to "<phrase>"

        Examples: Forms
        | phrase            |
        | Dados pessoais    |
        | Endereço          |
        | Pagamento         |
        | Acesso ao plano   |
        | Login             |

    Scenario: Clicks on button
        Given that the client is at Create Account's page
        When the client clicks on "<phrase>"
        Then he is redirected to "<phrase>"

        Examples: Buttons
        | phrase                |
        | Início                |
        | Rede de parceiros     |
        | Fale conosco          |
        | Quero ser parceiro    |
        | Nossos produtos       |
        | Login                 |
        | Quero meu cartão      |
        | Trocar plano          |
