from django.test import TestCase
from validador.services import validar_palavra

class ValidadorMorfologicoTests(TestCase):
    
    def test_palavra_valida_deve_retornar_sucesso(self):
        # Dado (Given) os morfemas submetidos pelo aluno
        morfemas_submetidos = ['in', 'feliz', 'mente']
        
        # Quando (When) passam pela validação
        resultado = validar_palavra(morfemas_submetidos)
        
        # Então (Then) o sistema deve reconhecer como válida
        self.assertTrue(resultado['is_valida'])
        self.assertEqual(resultado['processo'], 'Derivação Parassintética')

    def test_palavra_invalida_deve_retornar_erro(self):
        # Dado (Given) uma combinação inexistente
        morfemas_submetidos = ['mente', 'feliz', 'in']
        
        # Quando (When) passam pela validação
        resultado = validar_palavra(morfemas_submetidos)
        
        # Então (Then) o sistema deve barrar
        self.assertFalse(resultado['is_valida'])