import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps11Bp09Page() {
  return (
    <article className="doc-content">
      <h1>OPS11-BP09 — 개선을 위한 시간 할당</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>

      <p>
        프로세스 내에서 시간과 리소스를 할당하여 지속적인 점진적 개선이 가능하도록 합니다.
        게임 데이와 AWS Fault Injection Service(FIS)를 통해 프로덕션과 유사한 환경에서 실험합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        환경의 임시 복제본을 만들어 실험 및 테스트의 위험, 노력, 비용을 줄입니다.
        복제된 환경을 사용하여 분석에서 도출된 결론을 테스트하고, 실험하고, 계획된 개선 사항을 개발/테스트합니다.
        게임 데이를 실행하고 Fault Injection Service(FIS)를 사용하여 프로덕션과 유사한 환경에서 실험을 위한 제어와 가드레일을 제공합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>알려진 성능 문제가 계획된 기능 뒤에 백로그에 추가되어 기능 개발 속도가 유지되면 영원히 해결되지 않을 수 있는 경우</li>
        <li>관리자와 개발자가 모든 여유 시간을 개선 사항 선택과 구현에 사용하도록 승인하여 완료된 개선 사항이 없는 경우</li>
        <li>운영 인수 완료 후 운영 관행을 재테스트하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <p>
        프로세스 내에서 시간과 리소스를 할당함으로써 지속적인 점진적 개선이 가능합니다.
        게임 데이를 통해 실제 사용 패턴에서 학습하고 시스템 내성을 강화합니다.
      </p>

      <h2>구현 지침</h2>
      <ul>
        <li>프로세스 내에서 지속적인 점진적 개선을 위한 시간과 리소스를 할당합니다.</li>
        <li>변경을 구현하고 결과를 평가하여 성공 여부를 결정합니다.</li>
        <li>결과가 목표를 충족하지 못하지만 개선이 우선순위로 남아있다면 대안을 추구합니다.</li>
        <li>게임 데이를 통해 프로덕션 워크로드를 시뮬레이션하고 학습을 통해 개선합니다.</li>
        <li>AWS Fault Injection Service(FIS)를 사용하여 프로덕션과 유사한 환경에서 통제된 실험을 실행합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Fault Injection Service (FIS) — 프로덕션과 유사한 환경에서 통제된 실험 실행</li>
        <li>AWS CloudFormation — 임시 테스트 환경 신속 프로비저닝</li>
        <li>Amazon CloudWatch — 실험 결과 측정 및 비교</li>
      </ul>

      <PageNav />
    </article>
  );
}
