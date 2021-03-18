<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PageController extends AbstractController
{
    public function input()
    {
        return $this->render('mypage.html.twig');
    }
}