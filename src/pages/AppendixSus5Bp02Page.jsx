import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SUS05-BP02 — 에너지 효율적인 하드웨어 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        AWS Graviton 프로세서와 같이 에너지 효율적으로 설계된 하드웨어를 활용하여 동일한 성능을 낮은 에너지로 달성합니다.
        AWS는 지속적으로 에너지 효율성이 향상된 새로운 하드웨어를 출시하므로, 이를 적극 채택하면 탄소 발자국을 줄일 수 있습니다.
        Graviton 기반 인스턴스는 x86 대비 최대 60%까지 에너지 효율이 높습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드가 에너지 효율이 입증된 하드웨어에서 실행되어 동일한 성능을 달성하면서도
        전력 소비와 탄소 배출을 최소화합니다. 비용 절감과 환경적 이익을 동시에 달성합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>에너지 효율이 낮은 구형 x86 인스턴스를 계속 사용하는 것</li>
        <li>Graviton 호환성 검토 없이 기존 인스턴스 유형을 유지하는 것</li>
        <li>하드웨어 효율성보다 익숙함을 이유로 인스턴스 유형을 변경하지 않는 것</li>
        <li>에너지 소비를 워크로드 선택 기준으로 고려하지 않는 것</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>x86 대비 최대 60% 에너지 소비 절감으로 탄소 발자국 감소</li>
        <li>동일 성능 대비 인스턴스 비용 약 20% 절감</li>
        <li>AWS의 지속 가능성 투자를 워크로드에 직접 반영</li>
        <li>장기적으로 더욱 개선된 하드웨어 효율성 혜택을 누릴 기반 마련</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>현재 x86 워크로드의 Graviton 호환성을 평가하고 마이그레이션 계획 수립</li>
        <li>AWS Graviton 마이그레이션 가이드를 참고하여 단계적 전환 수행</li>
        <li>Lambda, ECS, EKS 등 관리형 서비스에서 arm64 아키텍처 옵션 활성화</li>
        <li>컨테이너 기반 워크로드는 멀티 아키텍처 이미지를 빌드하여 유연성 확보</li>
        <li>Amazon EC2 인스턴스 유형 비교 도구로 에너지 효율 지표 비교 검토</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Graviton 프로세서 — arm64 기반 에너지 효율적 CPU</li>
        <li>Amazon EC2 C7g, M7g, R7g 인스턴스 — 최신 Graviton 기반 인스턴스</li>
        <li>AWS Lambda (arm64) — 서버리스 환경의 Graviton 지원</li>
        <li>Amazon ECS / EKS — 컨테이너 환경의 Graviton 지원</li>
        <li>AWS Compute Optimizer — Graviton 전환 권장사항 포함</li>
      </ul>
      <PageNav />
    </article>
  );
}
