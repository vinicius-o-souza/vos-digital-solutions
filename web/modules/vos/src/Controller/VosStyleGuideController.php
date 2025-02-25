<?php

declare(strict_types=1);

namespace Drupal\vos\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for VOS Digital Solutions routes.
 */
final class VosStyleGuideController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function __invoke(): array {
    return [
      '#theme' => 'vos_style_guide',
      '#attached' => [
        'library' => [
          'vos/style-guide'
        ],
      ]
    ];
  }

}
